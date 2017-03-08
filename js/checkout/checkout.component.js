import controller from './checkout.controller';

const CheckoutComponent = {
  controller,
  template: `
    <login-modal
      ng-if="$ctrl.showModal"
      close-modal="$ctrl.closeSignIn()">
    </login-modal>
    <div class="list-area">
      <cart-list
        cart="$ctrl.cart"
        remove-item="$ctrl.removeItem(item)">
      </cart-list>
      <div class="empty-cart" ng-if="!$ctrl.cart">
        Cart Is Empty
        <br>
        <a href="/courses/">Check out some courses here</a>
      </div>
      <div class="checkout-bottom" ng-if="$ctrl.cart.length">
        <div class="total-price">
          Total: <strong>{{$ctrl.getTotal() | currency:$:0}}</strong>
        </div>
      </div>
    </div>

    <div class="pay-area" ng-if="$ctrl.cart.length">
      <h2>Pay With</h2>
      <button
        class="sign-in-btn"
        ng-if="!$ctrl.userData.auth.loggedIn"
        ng-click="$ctrl.showModal = true">
          Log In / Register To Purchase
      </button>
      <div class="tabs" ng-if="$ctrl.userData.auth.loggedIn">
        <ul>
          <li ng-click="$ctrl.activePayment = 0" ng-class="{'active': $ctrl.activePayment === 0}">PayPal</li>
          <li ng-click="$ctrl.activePayment = 1" ng-class="{'active': $ctrl.activePayment === 1}">Card</li>
        </ul>
      </div>

      <div class="paypal-pay"
        ng-if="$ctrl.userData.auth.loggedIn && $ctrl.activePayment === 0">
          <button ng-click="$ctrl.paypalBuy()">
            <span ng-if="!$ctrl.paymentLoading">Go To PayPal</span>
            <htc-spinner ng-if="$ctrl.paymentLoading"></htc-spinner>
          </button>
      </div>

      <div class="stripe-pay"
        ng-if="$ctrl.userData.auth.loggedIn && $ctrl.activePayment === 1">
          <div class="payment-field">
            <label>Name</label>
            <input ng-model="$ctrl.payment.name" type="text" placeholder="Name">
          </div>
          <div class="payment-field">
            <label>Card Number</label>
            <input ng-model="$ctrl.payment.card.number" type="text" placeholder="Card Number">
          </div>
          <div class="payment-field">
            <label>CVC</label>
            <input ng-model="$ctrl.payment.card.cvc" type="text" placeholder="CVC">
          </div>
          <div class="payment-field">
            <label>Exp Month</label>
            <input ng-model="$ctrl.payment.card.exp_month" type="text" placeholder="Exp Month">
          </div>
          <div class="payment-field">
            <label>Exp Year</label>
            <input ng-model="$ctrl.payment.card.exp_year" type="text" placeholder="Exp Year">
          </div>
          <button ng-click="$ctrl.stripeBuy()">
            <span ng-if="!$ctrl.paymentLoading">Buy</span>
            <htc-spinner ng-if="$ctrl.paymentLoading"></htc-spinner>
          </button>
      </div>

    </div>
  `
};

export default CheckoutComponent;
