class BuyButtonController{
  constructor($location, cart, $timeout, analytics, pixels, fb) {
    this.$location = $location;
    this.cart = cart;
    this.$timeout = $timeout;
    this.analytics = analytics;
    this.pixels = pixels;
    this.fb = fb;

    this.buttonText = 'Take This Course';
  }
  $onInit(){
    this.loading = true;
    this.triggerContentView();

    // TODO refactor this. It no longer requires multiple round trips Tue 18 Jul 2017 22:00:31 UTC
    let course = this.getCourseFromUrl();
    this.fb.getCourseMeta(course)
      .then(data => {
        if(!data.id) return;
        this.$timeout(() => {
          this.courseData = data;
          this.loading = false;
          this.fb.isEnrolled(data.id)
            .then(enrolled => {
              this.$timeout(() => {
                if(enrolled){
                  this.enrolled = true;
                  this.buttonText = 'Already Enrolled';
                }else{
                  let isInCart = this.cart.isInCart(this.courseData.id);
                  if(isInCart){
                    this.inCart = true;
                    this.buttonText = 'Already In Cart';
                  }
                }
              });
            })
            .catch(err => console.error('No user available'));
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
    this.analytics.trackUserEvent('ViewContent', {location: loc, value: type});
  }
  takeCourse(){
    if(this.inCart || this.enrolled){return false;}

    this.pixels.facebookPixel(0)
      .then(() => {
        let loc = this.getPageLocations() || '';
        let type = loc.split('/');
        type = type[0];

        this.analytics.trackEvent('AddToCart', this.courseData.title);
        this.analytics.trackUserEvent('AddToCart', {location: this.courseData.title, value: parseInt(this.courseData.price).toFixed(2)});
        this.analytics.fbTrackEvent(
                                  'AddToCart',
                                  {
                                      content_ids: [loc],
                                      content_type: type,
                                      value: parseInt(this.courseData.price).toFixed(2),
                                      currency: 'USD'
                                  },
                                  'content_type');

        this.cart.addToCart(this.courseData)
          .then(added => {
            return;
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

BuyButtonController.$inject = ['$location', 'cartService', '$timeout', 'analyticsService', 'pixelService', 'firebaseService'];

export default BuyButtonController;
