class CheckoutController{
  constructor(firebaseService, userData, $scope, dataService) {
    this.fb = firebaseService;
    this.userData = userData;
    this.$scope = $scope;
    this.dataService = dataService;
  }
  $onInit(){
    this.cart = [];
    this.getCart();
  }
  getCart(){
    return this.userData.getUserCart()
      .then(cart => {
        this.cart = cart;
        this.$scope.$apply();
      });
  }
  removeItem(item){
    let index = this.cart.indexOf(item);
    if(index > -1){
      this.cart.splice(index, 1);
      this.userData.updateCart(
        angular.copy(this.cart))
        .then(() => console.log('updated cart'));
    }
  }
  stripeBuy(){
    this.userData.stripeBuy(this.cart)
      .then(data => {
        console.log(data);
      })
      .catch(err => console.error(err));
  }
}

CheckoutController.$inject = ['firebaseService', 'userData', '$scope'];

export default CheckoutController;
