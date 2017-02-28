import controller from './checkout.controller';

const CheckoutComponent = {
  controller,
  template: `
    <cart-list
      cart="$ctrl.cart"
      remove-item="$ctrl.removeItem(item)">
    </cart-list>
    <button ng-click="$ctrl.stripeBuy()">Buy</button>
  `
};

export default CheckoutComponent;
