import controller from './checkout.controller';

const CheckoutComponent = {
  controller,
  template: `
    <login-modal
      ng-if="$ctrl.showModal"
      close-modal="$ctrl.closeSignIn()">
    </login-modal>
    <div class="list-area">
      <cart-list
        cart="$ctrl.cart.cart"
        remove-item="$ctrl.removeItem(item)"
        loading-cart="$ctrl.cart.loading">
      </cart-list>
      <div class="checkout-bottom" ng-if="$ctrl.cart.cart.length">
        <div class="total-price">
          Total: <strong>{{$ctrl.cart.getTotal() | currency:$:0}}</strong>
        </div>
      </div>
      <div class="empty-cart">
        <a href="/courses/">Check out some more courses here</a>
      </div>
    </div>
    <cart-payment show-modal="$ctrl.showSignIn()"></cart-payment>
  `
};

export default CheckoutComponent;
