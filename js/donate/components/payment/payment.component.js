import controller from './payment.controller';

const PaymentComponent = {
  controller,
  template: `
    <div class="pay-area">
      <form class="stripe-pay"
        id="payment-form">

          <div class="payment-field">
            <label>
              <input ng-model="$ctrl.payment.amount" type="text" placeholder="10.00" ng-class="{'error': $ctrl.errors.amount, 'is-empty': !$ctrl.payment.amount, 'is-focused': $ctrl.focused.amount}" class="field" ng-focus="$ctrl.focused.amount = true" ng-blur="$ctrl.focused.amount = false" ng-change="$ctrl.amountChange()">
              <span><span ng-class="{'error': $ctrl.errors.amount}">Donation Amount ($)</span></span>
            </label>
          </div>

          <div class="payment-field">
            <label>
              <input ng-model="$ctrl.payment.name" type="text" placeholder="Jane Doe" ng-class="{'error': $ctrl.errors.name, 'is-empty': !$ctrl.payment.name, 'is-focused': $ctrl.focused.name}" class="field" ng-focus="$ctrl.focused.name = true" ng-blur="$ctrl.focused.name = false">
              <span><span ng-class="{'error': $ctrl.errors.name}">Name</span></span>
            </label>
          </div>

          <div class="payment-field">
            <label>
              <div id="card-element" class="field is-empty"></div>
              <span><span ng-class="{'error': $ctrl.errors.number}">
                {{$ctrl.errors.number ? $ctrl.errors.number : 'Card or debit card details'}}
              </span></span>
            </label>
          </div>

          <button ng-click="$ctrl.stripeDonate()">
            <span ng-if="!$ctrl.paymentLoading">Donate</span>
            <htc-spinner ng-if="$ctrl.paymentLoading"></htc-spinner>
          </button>
          <!--<div class="payment-total">
            Total: {{$ctrl.cart.getTotal() | currency:$:0}}
          </div>-->
          <div class="purchase-feedback">{{$ctrl.feedbackText}}</div>
      </form>
    </div>
  `
};

export default PaymentComponent;
