import angular from 'angular';

class CartListController{
  constructor(userData, $scope) {
    this.userData = userData;
    this.$scope = $scope;
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
}

CartListController.$inject = ['userData', '$scope'];

export default CartListController;
