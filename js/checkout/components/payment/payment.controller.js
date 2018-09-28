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
    this.errors = {};
    this.payment = {
      card: {
        number: '',
        cvc: '',
        expiry: '',
      }
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
  getNumberChars(str) {
    return str.split('')
      .map(val => parseInt(val))
      .filter(val => !isNaN(val));
  }
  onExpiryChange() {
    const exp = this.payment.card.expiry;
    const chars = this.getNumberChars(exp);

    if (chars.length > 2) {
      chars.splice(2, 0, ' / ');
    }
    this.payment.card.expiry = chars.slice(0, 5).join('');
  }
  onCvcChange() {
    const cvc = this.payment.card.cvc;
    const chars = this.getNumberChars(cvc);
    this.payment.card.cvc = chars.slice(0, 3).join('');
  }
  onNumberChange() {
    const number = this.payment.card.number;
    const chars = this.getNumberChars(number);

    if (chars.length > 4) {
      chars.splice(4, 0, ' ');
    }
    if (chars.length > 9) {
      chars.splice(9, 0, ' ');
    }
    if (chars.length > 14) {
      chars.splice(14, 0, ' ');
    }
    this.payment.card.number = chars.slice(0, 19).join('');
  }
  validatePaymentData(data) {
    const keys = ['cvc', 'exp_month', 'exp_year', 'number', 'name'];
    const errors = [];

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const val = data[key];
      if (!val) {
        errors.push({
          key,
          error: `${key} must not be blank`,
        });
      } else if (key === 'cvc') {
        const chars = this.getNumberChars(val);
        if (chars.length !== 3) {
          errors.push({
            key,
            error: 'CVC must be 3 digits',
          });
        } else {
          const number = parseInt(chars.join(''));
          if (number > 999) {
            errors.push({
              key,
              error: 'CVC number is invalid',
            });
          }
        }
      } else if (key === 'exp_month') {
        const chars = this.getNumberChars(val);
        const number = parseInt(chars.join(''));
        if (number > 12 || number < 0) {
          errors.push({
            key,
            error: 'Month must be between 1 and 12',
          });
        }
      } else if (key === 'exp_year') {
        const chars = this.getNumberChars(val);
        const number = parseInt(chars.join(''));
        if (number < 18) {
          errors.push({
            key,
            error: 'Invalid year',
          });
        }
      } else if (key === 'number') {
        const chars = this.getNumberChars(val);
        if (chars.length !== 16) {
          errors.push({
            key,
            error: 'Card number must be 16 digits long',
          });
        }
      }
    }
    return errors;
  }
  stripeBuy(){
    this.errors = {};
    const expSplit = this.payment.card.expiry.split('/');
    const exp_month = (expSplit[0] || '').trim();
    const exp_year =  (expSplit[1] || '').trim();

    const cardData = {
      name: this.payment.name,
      number: this.payment.card.number,
      cvc: this.payment.card.cvc,
      exp_month,
      exp_year,
    }

    const errors = this.validatePaymentData(cardData);

    if (errors.length) {
      this.errors = errors.reduce((agg, val) => {
        agg[val.key] = val.error;
        return agg;
      }, {});
      return;
    }

    if(this.paymentLoading) return;
    this.paymentLoading = true;
    this.feedbackText = '';

    this.stripe.card.createToken(cardData)
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
