class CheckoutController{
  constructor(cart, auth) {
    this.cart = cart;
    this.auth = auth;
  }
  $onInit() {
    this.cart.getCart();
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
}

CheckoutController.$inject = ['cartService', 'auth'];

export default CheckoutController;
