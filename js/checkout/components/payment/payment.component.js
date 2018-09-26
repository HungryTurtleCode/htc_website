import controller from './payment.controller';

const PaymentComponent = {
  controller,
  template: `
    <div class="pay-area" ng-if="$ctrl.cart.cart.length">
      <div class="tabs" ng-if="$ctrl.auth.loggedIn">
        <h4>Choose payment method:</h4>
        <ul>
          <li
            ng-click="$ctrl.activePayment = 1"
            ng-class="{'active': $ctrl.activePayment === 1}"
          >
            <img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_240/v1537981927/images_p2ldd1.png" alt="pay with card">
          </li>
          <li
            ng-click="$ctrl.activePayment = 0"
            ng-class="{'active': $ctrl.activePayment === 0}"
          >
            <img src="https://res.cloudinary.com/djxscnpzf/image/upload/v1537980948/paypal_logo_oeygnd.png" alt="pay with paypal">
          </li>
        </ul>
      </div>

      <div class="paypal-pay"
        ng-if="$ctrl.auth.loggedIn && $ctrl.activePayment === 0">
          <button ng-click="$ctrl.paypalBuy()">
            <span ng-if="!$ctrl.paymentLoading">Proceed To PayPal</span>
            <htc-spinner ng-if="$ctrl.paymentLoading"></htc-spinner>
          </button>
          <div class="purchase-feedback">{{$ctrl.feedbackText}}</div>
          <div class="payment-total">
            Total: {{$ctrl.cart.getTotal() | currency:$:0}}
          </div>
      </div>

      <div class="stripe-pay"
        ng-if="$ctrl.auth.loggedIn && $ctrl.activePayment === 1">
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
            <label>Expiry</label>
            <input ng-model="$ctrl.payment.card.expiry" type="text" placeholder="MM / YY" ng-change="$ctrl.onExpiryChange()">
          </div>

          <button ng-click="$ctrl.stripeBuy()">
            <span ng-if="!$ctrl.paymentLoading">Pay Now</span>
            <htc-spinner ng-if="$ctrl.paymentLoading"></htc-spinner>
          </button>
          <div class="payment-total">
            Total: {{$ctrl.cart.getTotal() | currency:$:0}}
          </div>
          <div class="purchase-feedback">{{$ctrl.feedbackText}}</div>
      </div>

    </div>
  `
};

export default PaymentComponent;
