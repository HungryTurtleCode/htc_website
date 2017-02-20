class BuyButtonController{
  constructor($location, userData) {
    this.$location = $location;
    this.userData = userData;

    let course = this.getCourseFromUrl();
    this.userData.getCourseMeta(course)
      .then(data => {
        this.courseData = data;
      })
  }
  takeCourse(){
    this.userData.addToCart(this.courseData)
      .then(added => {
        if(added){
          window.location.href = '/checkout';
        }
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
}

BuyButtonController.$inject = ['$location', 'userData'];

export default BuyButtonController;
