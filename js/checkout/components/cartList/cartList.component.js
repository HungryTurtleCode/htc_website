import controller from './cartList.controller';

const CartList = {
  controller,
  bindings: {
    cart: '<',
    removeItem: '&'
  },
  template: `
    <div ng-if="$ctrl.cart.length === 0">
      <htc-spinner></htc-spinner>
    </div>
    <div ng-repeat="item in $ctrl.cart" class="cart-item">
      <a ng-href="/courses/{{item.slug}}">
        <img class="cart-img"
          ng-src="{{item.img}}"/>
      </a>
      <a ng-href="/courses/{{item.slug}}" class="item-title">
        {{item.title}}
      </a>
      <span class="price">{{item.price | currency:$:0}}</span>
      <button
        class="remove-button"
        ng-click="$ctrl.remove(item)">
          <span ng-if="!$ctrl.removeLoading">X</span>
          <htc-spinner ng-if="$ctrl.removeLoading"></htc-spinner>
      </button>
    </div>
  `
};

export default CartList;
