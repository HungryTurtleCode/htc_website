class CheckoutController{
  constructor($scope, stripe, analytics, cart, fb) {
    this.$scope = $scope;
    this.stripe = stripe;
    this.analytics = analytics;
    this.cart = cart;
    this.fb = fb;
  }
  $onInit(){
    this.activePayment = 0;
    this.paymentLoading = false;
    this.feedbackText = '';
    this.cart.getCart();
  }
  closeSignIn(){
    this.showModal = false;
  }
  removeItem(item){
    this.cart.removeFromCart(item);
  }
  paypalBuy(){
    if(this.paymentLoading) return;
    this.paymentLoading = true;
    this.feedbackText = '';

    this.fb.paypalBuy(this.cart.cart)
      .then(data => {
        if(data.success){
          this.analytics.fbTrackEvent(
                                      'Purchase',
                                      {
                                        content_ids: this.cart.cart,
                                        content_type: 'courses',
                                        value: this.getTotal().toFixed(2),
                                        currency: 'USD'
                                      },
                                      'content_type'
                                    );
          this.cart.cart.forEach(item => {
            this.analytics.trackEvent('Purchase', item.title, null, item.price);
            // TODO track purchase analytics on the server not here Mon 24 Jul 2017 16:26:12 UTC
            this.analytics.trackUserEvent('Purchase', {location: item.title, value: item.price});
          });
          this.paymentLoading = false;
          window.location.href = data.url;
        }else{
          this.paymentLoading = false;
          this.feedbackText = 'Something Went Wrong, try again later';
          this.cart.cart.forEach(item => {
            this.analytics.trackEvent('PaypalFAIL', item.title, null, item.price);
          });
        }
      })
    .catch(err => {
      this.paymentLoading = false;
      this.feedbackText = 'Something Went Wrong, try again later';
      this.cart.cart.forEach(item => {
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

        this.fb.stripeBuy(this.cart.cart, response.id)
          .then(data => {
            if(data.success){
              this.cart.cart.forEach(item => {
                this.analytics.trackEvent('Purchase', item.title, null, item.price);
                // TODO track purchase analytics on the server not here Mon 24 Jul 2017 16:26:12 UTC
                this.analytics.trackUserEvent('Purchase', {location: item.title, value: item.price})
              });
              this.paymentLoading = false;
              window.location.href = data.url;
            }else{
              this.paymentLoading = false;
              this.feedbackText = 'Something Went Wrong, try again later';
              this.cart.cart.forEach(item => {
                this.analytics.trackEvent('StripeFAIL', item.title, null, item.price);
              });
            }
          })
          .catch(err => {
            this.paymentLoading = false;
            this.feedbackText = 'Something Went Wrong, try again later';
            this.cart.cart.forEach(item => {
              this.analytics.trackEvent('StripeFAIL', item.title, null, item.price);
            });
            console.error(err)
          });
      });
  }
}

CheckoutController.$inject = ['$scope', 'stripe', 'analyticsService', 'cartService', 'firebaseService'];

export default CheckoutController;
