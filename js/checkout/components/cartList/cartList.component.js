import controller from './cartList.controller';

const CartList = {
  controller,
  bindings: {
    Name: '<'
  },
  template: `
    <div ng-repeat="item in $ctrl.cart">
      <button ng-click="$ctrl.removeItem(item)">Remove</button>
      {{item}}
    </div>
  `
};

export default CartList;
