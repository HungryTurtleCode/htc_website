class BuyButtonController{
  constructor($location, userData, $timeout) {
    this.$location = $location;
    this.userData = userData;
    this.$timeout = $timeout;

    this.buttonText = 'Take This Course';
  }
  $onInit(){
    this.loading = true;

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
  takeCourse(){
    if(this.inCart || this.enrolled){return false;}

    this.userData.addToCart(this.courseData)
      .then(added => {
        if(added){
          window.location.href = '/checkout';
        }
      })
      .catch(err => console.log(err));
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
}

BuyButtonController.$inject = ['$location', 'userData', '$timeout'];

export default BuyButtonController;
