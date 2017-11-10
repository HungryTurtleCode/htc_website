import controller from './cartList.controller';

const CartList = {
  controller,
  bindings: {
    cart: '<',
    removeItem: '&',
    loadingCart: '<'
  },
  template: `
    <div ng-if="$ctrl.loadingCart">
      <htc-spinner></htc-spinner>
    </div>
    <div ng-repeat="item in $ctrl.cart" class="cart-item">
      <a ng-href="/courses/{{item.id}}">
        <img class="cart-img"
          ng-src="{{item.img}}"/>
      </a>
      <a ng-href="/courses/{{item.id}}" class="item-title">
        {{item.name}}
      </a>
      <span class="price">{{item.price | currency:$:0}}</span>
      <button
        class="remove-button"
        ng-click="$ctrl.remove(item)">
          <span ng-if="!$ctrl.removeLoading">X</span>
          <htc-spinner ng-if="item.removeLoading"></htc-spinner>
      </button>
    </div>
    <div class="empty-cart" ng-if="!$ctrl.loadingCart && !$ctrl.cart.length">
      Cart Is Empty
      <br>
      <a href="/courses/">Check out some courses here</a>
    </div>
  `
};

export default CartList;
