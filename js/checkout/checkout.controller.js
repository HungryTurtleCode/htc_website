class CheckoutController{
  constructor(cart, auth) {
    this.cart = cart;
    this.auth = auth;
  }
  $onInit() {
    this.cart.getCart();
    this.checkoutStage = 0;
  }
  showSignIn() {
    this.showModal = true;
  }
  closeSignIn() {
    this.showModal = false;
  }
  removeItem(item) {
    this.cart.removeFromCart(item);
  }
  goToPayment() {
    this.checkoutStage = 1;
  }
  goToCartList() {
    this.checkoutStage = 0;
  }
}

CheckoutController.$inject = ['cartService', 'auth'];

export default CheckoutController;
