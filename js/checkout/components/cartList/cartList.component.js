const CartList = {
  bindings: {
    cart: '<',
    removeItem: '&'
  },
  template: `
    <div ng-repeat="item in $ctrl.cart">
      <button ng-click="$ctrl.removeItem({item})">Remove</button>
      {{item}}
    </div>
  `
};

export default CartList;
