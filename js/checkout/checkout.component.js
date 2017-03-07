import controller from './checkout.controller';

const CheckoutComponent = {
  controller,
  template: `
    <cart-list
      cart="$ctrl.cart"
      remove-item="$ctrl.removeItem(item)">
    </cart-list>
    <div class="total-price">
      Total: {{$ctrl.getTotal() | currency:$:0}}
    </div>
    <button ng-click="$ctrl.stripeBuy()">Buy</button>
    <button ng-click="$ctrl.paypalBuy()">Paypal Buy</button>


    <h4>Payment</h4>
    <div class="payment-field">
      <input ng-model="$ctrl.payment.name" type="text" placeholder="Name">
      <i class="fa fa-exclamation-circle cc-error" aria-hidden="true"></i>
      <i class="fa fa-check-circle cc-good" aria-hidden="true"></i>
    </div>
    <div class="payment-field">
      <input ng-model="$ctrl.payment.card.number" type="text" placeholder="Card Number">
      <i class="fa fa-exclamation-circle cc-error" aria-hidden="true"></i>
      <i class="fa fa-check-circle cc-good" aria-hidden="true"></i>
    </div>
    <div class="payment-field">
      <input ng-model="$ctrl.payment.card.cvc" type="text" placeholder="CVC">
      <i class="fa fa-exclamation-circle cc-error" aria-hidden="true"></i>
      <i class="fa fa-check-circle cc-good" aria-hidden="true"></i>
    </div>
    <div class="payment-field">
      <input ng-model="$ctrl.payment.card.exp_month" type="text" placeholder="Exp Month">
      <i class="fa fa-exclamation-circle cc-error" aria-hidden="true"></i>
      <i class="fa fa-check-circle cc-good" aria-hidden="true"></i>
    </div>
    <div class="payment-field">
      <input ng-model="$ctrl.payment.card.exp_year" type="text" placeholder="Exp Year">
      <i class="fa fa-exclamation-circle cc-error" aria-hidden="true"></i>
      <i class="fa fa-check-circle cc-good" aria-hidden="true"></i>
    </div>
  `
};

export default CheckoutComponent;
