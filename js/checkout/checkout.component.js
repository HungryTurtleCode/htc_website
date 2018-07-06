import controller from './checkout.controller';

const CheckoutComponent = {
  controller,
  template: `
    <login-modal
      ng-if="$ctrl.showModal"
      close-modal="$ctrl.closeSignIn()">
    </login-modal>
    <div class="list-area">
      <button
        ng-click="$ctrl.goToCartList()"
        ng-if="$ctrl.checkoutStage === 1"
        class="cart-nav left"
      >
        Go Back To Cart
      </button>
      <div
        ng-if="$ctrl.checkoutStage === 0"
        class="clear"
      >
        <cart-list
          cart="$ctrl.cart.cart"
          remove-item="$ctrl.removeItem(item)"
          loading-cart="$ctrl.cart.loading">
        </cart-list>
        <div class="empty-cart">
          <a href="/courses/">Check out some more courses here</a>
        </div>
      </div>
      <cart-payment
        class="clear"
        show-modal="$ctrl.showSignIn()"
        ng-if="$ctrl.checkoutStage === 1"
      ></cart-payment>
    </div>
    <div class="checkout-btn-area"
      ng-if="$ctrl.cart.cart.length"
    >
      <span class="total">Total:</span>
      <span class="price">
        {{$ctrl.cart.getTotal() | currency:$:0}}
      </span>
      <button
        ng-click="$ctrl.goToPayment()"
        ng-if="$ctrl.checkoutStage === 0"
        class="cart-nav"
      >
        Checkout
      </button>
    </div>
  `
};

export default CheckoutComponent;
