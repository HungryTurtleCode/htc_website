class PaymentController{
  constructor(stripe, analytics, cart, fb, auth) {
    this.stripe = stripe;
    this.analytics = analytics;
    this.cart = cart;
    this.fb = fb;
    this.auth = auth;
  }
  $onInit(){
    this.activePayment = 1;
    this.paymentLoading = false;
    this.feedbackText = '';
  }
  paypalBuy(){
    if(this.paymentLoading) return;
    this.paymentLoading = true;
    this.feedbackText = '';
    this.fb.paypalBuy(this.cart.cart)
      .then(data => {
        if(data.url){
          this.analytics.fbTrackEvent(
                                      'Purchase',
                                      {
                                        content_ids: this.cart.cart,
                                        content_type: 'courses',
                                        value: this.cart.getTotal().toFixed(2),
                                        currency: 'USD'
                                      },
                                      'content_type'
                                    );
          this.cart.cart.forEach(item => {
            this.analytics.trackEvent('Purchase', item.name, null, item.price);
            // TODO track purchase analytics on the server not here Mon 24 Jul 2017 16:26:12 UTC
            this.analytics.trackUserEvent('Purchase', {location: item.name, value: item.price});
          });
          this.paymentLoading = false;
          window.location.href = data.url;
        }else{
          this.paymentLoading = false;
          this.feedbackText = 'Something Went Wrong, try again later';
          this.cart.cart.forEach(item => {
            this.analytics.trackEvent('PaypalFAIL', item.name, null, item.price);
          });
        }
      })
    .catch(err => {
      this.paymentLoading = false;
      this.feedbackText = 'Something Went Wrong, try again later';
      this.cart.cart.forEach(item => {
        this.analytics.trackEvent('PaypalFAIL', item.name, null, item.price);
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
                this.analytics.trackEvent('Purchase', item.name, null, item.price);
                // TODO track purchase analytics on the server not here Mon 24 Jul 2017 16:26:12 UTC
                this.analytics.trackUserEvent('Purchase', {location: item.name, value: item.price})
              });
              this.paymentLoading = false;
              window.location.href = data.url;
            }else{
              this.paymentLoading = false;
              this.feedbackText = 'Something Went Wrong, try again later';
              this.cart.cart.forEach(item => {
                this.analytics.trackEvent('StripeFAIL', item.name, null, item.price);
              });
            }
          })
          .catch(err => {
            this.paymentLoading = false;
            this.feedbackText = 'Something Went Wrong, try again later';
            this.cart.cart.forEach(item => {
              this.analytics.trackEvent('StripeFAIL', item.name, null, item.price);
            });
            console.error(err)
          });
      });
  }
}

PaymentController.$inject = ['stripe', 'analyticsService', 'cartService', 'firebaseService', 'auth'];

export default PaymentController;
