class CheckoutController{
  constructor(firebaseService, userData, $scope, stripe) {
    this.fb = firebaseService;
    this.userData = userData;
    this.$scope = $scope;
    this.stripe = stripe;
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
  getTotal(){
    if(this.cart){
      return this.cart.reduce((num, val) => {
        return num + val.price;
      }, 0);
    }
    return 0;
  }
  paypalBuy(){
    this.userData.paypalBuy(this.cart)
      .then(data => {
        if(data.success){
          window.location.href = data.url;
        }
      })
      .catch(err => console.error(err));
  }
  stripeBuy(){
    this.stripe.card.createToken(this.payment.card)
      .then(response => {
        console.log('token created for card ending in ', response.card.last4);

        this.userData.stripeBuy(this.cart, response.id)
          .then(data => {
            if(data.success){
              window.location.href = data.url;
            }
          })
          .catch(err => console.error(err));
      });
  }
}

CheckoutController.$inject = ['firebaseService', 'userData', '$scope', 'stripe'];

export default CheckoutController;
