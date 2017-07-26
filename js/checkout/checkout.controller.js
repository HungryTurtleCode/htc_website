class CheckoutController{
  constructor(userData, $scope, stripe, analytics, cart) {
    this.userData = userData;
    this.$scope = $scope;
    this.stripe = stripe;
    this.analytics = analytics;
    this.cart = cart;
  }
  $onInit(){
    this.cart = [];
    this.activePayment = 0;
    this.paymentLoading = false;
    this.feedbackText = '';
    this.getCart();
  }
  getCart(){
    return this.cart.getCart()
      .then(cart => {
        // TODO does the component need cart or can it come directly from cartService Wed 26 Jul 2017 13:02:46 UTC
        this.cart = cart;
        this.$scope.$apply();
      });
  }
  closeSignIn(){
    this.showModal = false;
  }
  removeItem(item){
    let index = this.cart.indexOf(item);
    if(index > -1){
      this.analytics.trackEvent('RemoveFromCart', item.title);

      // TODO maybe use course_id here Tue 18 Jul 2017 19:16:16 UTC
      this.analytics.trackUserEvent('RemoveFromCart', {location: item.title, value: item.price});

      this.cart.splice(index, 1);
      if(!this.cart.length){
        this.cart = null;
      }
      // FIXME no need to do the splicing etc, just use cart.removeFromCart. userData needs to be refactored before it can change though
      //
      // this.cart exists in the checkout as well as the userData Service. This needs to be fixed
      //
      this.cart.removeFromCart(item);
    }
  }
  getTotal(){
    if(this.cart){
      return this.cart.reduce((num, val) => {
        return parseInt(num) + parseInt(val.price);
      }, 0);
    }
    return 0;
  }
  paypalBuy(){
    if(this.paymentLoading) return;
    this.paymentLoading = true;
    this.feedbackText = '';

    this.userData.paypalBuy(this.cart)
      .then(data => {
        if(data.success){
          this.analytics.fbTrackEvent(
                                      'Purchase',
                                      {
                                        content_ids: this.cart,
                                        content_type: 'courses',
                                        value: this.getTotal().toFixed(2),
                                        currency: 'USD'
                                      },
                                      'content_type'
                                    );
          this.cart.forEach(item => {
            this.analytics.trackEvent('Purchase', item.title, null, item.price);
            // TODO track purchase analytics on the server not here Mon 24 Jul 2017 16:26:12 UTC
            this.analytics.trackUserEvent('Purchase', {location: item.title, value: item.price});
          });
          this.paymentLoading = false;
          window.location.href = data.url;
        }else{
          this.paymentLoading = false;
          this.feedbackText = 'Something Went Wrong, try again later';
          this.cart.forEach(item => {
            this.analytics.trackEvent('PaypalFAIL', item.title, null, item.price);
          });
        }
      })
    .catch(err => {
      this.paymentLoading = false;
      this.feedbackText = 'Something Went Wrong, try again later';
      this.cart.forEach(item => {
        this.analytics.trackEvent('PaypalFAIL', item.title, null, item.price);
      });
      console.error(err)
    });
  }
  stripeBuy(){
    if(this.paymentLoading) return;
    this.paymentLoading = true;
    this.feedbackText = '';

    this.stripe.card.createToken(this.payment.card)
      .then(response => {
        console.log('token created for card ending in ', response.card.last4);

        this.userData.stripeBuy(this.cart, response.id)
          .then(data => {
            if(data.success){
              this.cart.forEach(item => {
                this.analytics.trackEvent('Purchase', item.title, null, item.price);
                // TODO track purchase analytics on the server not here Mon 24 Jul 2017 16:26:12 UTC
                this.analytics.trackUserEvent('Purchase', {location: item.title, value: item.price})
              });
              this.paymentLoading = false;
              window.location.href = data.url;
            }else{
              this.paymentLoading = false;
              this.feedbackText = 'Something Went Wrong, try again later';
              this.cart.forEach(item => {
                this.analytics.trackEvent('StripeFAIL', item.title, null, item.price);
              });
            }
          })
          .catch(err => {
            this.paymentLoading = false;
            this.feedbackText = 'Something Went Wrong, try again later';
            this.cart.forEach(item => {
              this.analytics.trackEvent('StripeFAIL', item.title, null, item.price);
            });
            console.error(err)
          });
      });
  }
}

CheckoutController.$inject = ['userData', '$scope', 'stripe', 'analyticsService', 'cartService'];

export default CheckoutController;
