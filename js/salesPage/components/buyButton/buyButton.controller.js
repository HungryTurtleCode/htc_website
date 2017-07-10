class BuyButtonController{
  constructor($location, userData, $timeout, analytics, pixels) {
    this.$location = $location;
    this.userData = userData;
    this.$timeout = $timeout;
    this.analytics = analytics;
    this.pixels = pixels;

    this.buttonText = 'Take This Course';
  }
  $onInit(){
    this.loading = true;
    this.triggerContentView();

    let course = this.getCourseFromUrl();
    this.userData.getCourseMeta(course)
      .then(data => {
        this.$timeout(() => {
          this.courseData = data;
          this.loading = false;

          this.userData.isEnrolled(data.course)
            .then(enrolled => {
              this.$timeout(() => {
                if(enrolled){
                  this.enrolled = true;
                  this.buttonText = 'Already Enrolled';
                }else{
                  let isInCart = this.userData.isInCart(this.courseData.course);
                  if(isInCart){
                    this.inCart = true;
                    this.buttonText = 'Already In Cart';
                  }
                }
              });
            });
        });
      });
  }
  triggerContentView(){
    let loc = this.getPageLocations() || '';
    let type = loc.split('/');
    type = type[0];

    this.analytics.fbTrackEvent(
                                'ViewContent',
                                {
                                  content_ids: [loc],
                                  content_type: type,
                                  value: 0.00,
                                  currency: 'USD'
                                },
                                'content_type'
                              );
    this.userData.trackEvent('ViewContent', {page: loc, type: type});
  }
  takeCourse(){
    if(this.inCart || this.enrolled){return false;}

    this.pixels.facebookPixel(0)
      .then(() => {
        let loc = this.getPageLocations() || '';
        let type = loc.split('/');
        type = type[0];

        this.analytics.trackEvent('AddToCart', this.courseData.title);
        this.userData.trackEvent('AddToCart', {course: this.courseData.title, price: parseInt(this.courseData.price).toFixed(2)});
        this.analytics.fbTrackEvent(
                                  'AddToCart',
                                  {
                                      content_ids: [loc],
                                      content_type: type,
                                      value: parseInt(this.courseData.price).toFixed(2),
                                      currency: 'USD'
                                  },
                                  'content_type');

        this.userData.addToCart(this.courseData)
          .then(added => {
            if(added){
              window.location.href = '/checkout';
            }else{
              this.analytics.trackEvent('AddToCartFAILED', this.courseData.title);
            }
          })
          .catch(err => console.log(err));
      });
  }
  getCourseFromUrl(){
    let url = this.$location.absUrl();
    let arr = url.split('/');

    for(let i = arr.length - 1; i >= 0; i--){
      if(arr[i] !== '' && arr[i] !== '#!'){
        return arr[i];
      }
    }
  }
  getPageLocations(){
    let url = this.$location.absUrl();
    let arr = url.split('/');

    for(let i = arr.length-1; i >= 0; i--){
      let matches = arr[i].match(/\?([^&]*)/);
      if(matches){
        arr[i] = arr[i].slice(0, matches.index);
      }
      if(arr[i] === '' || arr[i] === '#!'){
        arr.splice(i, 1);
      }
    }

    let newArr = [arr[arr.length - 2], arr[arr.length - 1]];

    return newArr.join('/');
  }
}

BuyButtonController.$inject = ['$location', 'userData', '$timeout', 'analyticsService', 'pixelService'];

export default BuyButtonController;
