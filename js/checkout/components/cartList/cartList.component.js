const CartList = {
  bindings: {
    cart: '<',
    removeItem: '&'
  },
  template: `
    <div ng-if="$ctrl.cart.length === 0">
      Loading...
    </div>
    <div ng-repeat="item in $ctrl.cart" class="cart-item">
      <a ng-href="/courses/{{item.slug}}">
        <img class="cart-img"
          ng-src="{{item.img}}"/>
      </a>
      <a ng-href="/courses/{{item.slug}}">
        {{item.title}}
      </a>
      <span class="price">{{item.price | currency:$:0}}</span>
      <button ng-click="$ctrl.removeItem({item})">X</button>
    </div>
  `
};

export default CartList;
