import controller from './checkout.controller';

const CheckoutComponent = {
  controller,
  template: `
    <login-modal
      ng-if="$ctrl.showModal"
      close-modal="$ctrl.closeSignIn()">
    </login-modal>
    <h1
      ng-if="$ctrl.checkoutStage === 0"
    >Cart</h1>
    <div class="list-area">
      <button
        ng-click="$ctrl.goToCartList()"
        ng-if="$ctrl.checkoutStage === 1"
        class="payment-back-btn left"
      >
        Back
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
        ng-if="$ctrl.checkoutStage === 1"
      ></cart-payment>
    </div>
    <div class="checkout-btn-area"
      ng-if="$ctrl.cart.cart.length && $ctrl.checkoutStage === 0 && $ctrl.auth.loggedIn"
    >
      <span class="total">Total:</span>
      <span class="price">
        {{$ctrl.cart.getTotal() | currency:$:0}}
      </span>
      <button
        ng-click="$ctrl.goToPayment()"
        class="cart-nav"
      >
        Checkout
      </button>

    </div>
    <div class="checkout-btn-area"
      ng-if="$ctrl.cart.cart.length && !$ctrl.auth.loggedIn"
    >
      <button
        class="sign-in-btn"
        ng-click="$ctrl.showSignIn()">
          Log In / Register To Purchase
      </button>
    </div>
  `
};

export default CheckoutComponent;
