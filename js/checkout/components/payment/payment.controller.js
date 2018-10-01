class PaymentController{
  constructor(stripe, analytics, cart, fb, auth, $timeout) {
    this.stripe = stripe;
    this.analytics = analytics;
    this.cart = cart;
    this.fb = fb;
    this.auth = auth;
    this.$timeout = $timeout;
  }
  $onInit(){
    this.activePayment = 1;
    this.paymentLoading = false;
    this.feedbackText = '';
    this.errors = {};
    this.payment = {}
    this.focused = {
      name: false,
    };
    this.elements = {};
    this.$timeout(() => {
      this.mountStripeElements();
    }, 0);
  }
  mountStripeElements() {
    const card = this.stripe.createElement('card', {
      iconStyle: 'solid',
      style: {
        base: {
          iconColor: '#8898AA',
          color: '#454545',
          lineHeight: '36px',
          fontWeight: 300,
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSize: '19px',

          '::placeholder': {
            color: '#8898AA',
          },
        },
        invalid: {
          iconColor: '#e85746',
          color: '#e85746',
        }
      },
      classes: {
        focus: 'is-focused',
        empty: 'is-empty',
      },
    });

    card.mount('#card-element');
    card.addEventListener('change', event => {
      this.$timeout(() => {
        if (event.error) {
          this.errors.number = event.error.message;
        } else {
          this.errors.number = '';
        }
      }, 0);
    });
    this.elements = {
      card,
    }
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
  validatePaymentData(data) {
    const keys = ['name'];
    const errors = [];

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const val = data[key];
      if (!val) {
        errors.push({
          key,
          error: `${key} must not be blank`,
        });
      }
    }
    return errors;
  }
  stripeBuy(){
    if(this.paymentLoading) return;
    this.errors = {};

    const extraData = {
      name: this.payment.name,
    }

    const errors = this.validatePaymentData(extraData);

    if (errors.length) {
      this.errors = errors.reduce((agg, val) => {
        agg[val.key] = val.error;
        return agg;
      }, {});
      return;
    }

    this.paymentLoading = true;
    this.feedbackText = '';

    this.stripe.stripe.createToken(this.elements.card, extraData)
      .then(response => {
        if (response.error) {
          this.$timeout(() => {
            this.paymentLoading = false;
          }, 0);
          this.errors.number = response.error.message;
          return;
        }
        console.log('token created for card ending in ', response.token.card.last4);

        this.fb.stripeBuy(this.cart.cart, response.token.id)
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
      })
      .catch((err) => {
        this.paymentLoading = false;
        if (err.message = 'Your card number is incorrect.') {
          this.errors = {
            number: 'Invalid / incorrect card number',
          }
        } else {
          this.feedbackText = 'Something Went Wrong. Please try again later';
        }
        this.cart.cart.forEach(item => {
          this.analytics.trackEvent('StripeApiFAIL', item.name, null, item.price);
        });
      });
  }
}

PaymentController.$inject = ['stripeService', 'analyticsService', 'cartService', 'firebaseService', 'auth', '$timeout'];

export default PaymentController;
