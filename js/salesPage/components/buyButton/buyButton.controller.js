class BuyButtonController{
  constructor($location, userData) {
    this.$location = $location;
    this.userData = userData;
  }
  takeCourse(){
    let course = this.getCourseFromUrl();

    this.userData.addToCart(course)
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
