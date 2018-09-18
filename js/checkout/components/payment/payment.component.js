import controller from './payment.controller';

const PaymentComponent = {
  controller,
  template: `
    <div class="pay-area" ng-if="$ctrl.cart.cart.length">
      <div class="payment-total">Total: {{$ctrl.cart.getTotal() | currency:$:0}}</div>
      <div class="tabs" ng-if="$ctrl.auth.loggedIn">
        <ul>
          <li ng-click="$ctrl.activePayment = 1" ng-class="{'active': $ctrl.activePayment === 1}">Card</li>
          <li ng-click="$ctrl.activePayment = 0" ng-class="{'active': $ctrl.activePayment === 0}">PayPal</li>
        </ul>
      </div>

      <div class="paypal-pay"
        ng-if="$ctrl.auth.loggedIn && $ctrl.activePayment === 0">
          <button ng-click="$ctrl.paypalBuy()">
            <span ng-if="!$ctrl.paymentLoading">Proceed To PayPal</span>
            <htc-spinner ng-if="$ctrl.paymentLoading"></htc-spinner>
          </button>
          <div class="purchase-feedback">{{$ctrl.feedbackText}}</div>
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
          <div class="purchase-feedback">{{$ctrl.feedbackText}}</div>
      </div>

    </div>
  `
};

export default PaymentComponent;
