class PaymentController{
  constructor(stripe, analytics, fb, auth, $timeout) {
    this.stripe = stripe;
    this.analytics = analytics;
    this.fb = fb;
    this.auth = auth;
    this.$timeout = $timeout;
  }
  $onInit(){
    this.paymentLoading = false;
    this.feedbackText = '';
    this.errors = {};
    this.payment = {};
    this.focused = {
      name: false,
    };
    this.elements = {};
    this.$timeout(() => {
      this.mountStripeElements();
    }, 0);
  }
  amountChange() {
    const chars = this.payment.amount.split('');

    let hasDecimal = false;
    this.payment.amount = chars.reduce((agg, ch) => {
      const num = parseFloat(ch);
      if (!isNaN(num)) {
        agg += ch;
      } else if (ch === '.' && !hasDecimal) {
        agg += ch;
        hasDecimal = true;
      }
      return agg;
    }, '');
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
  validatePaymentData(data) {
    const keys = ['name', 'amount'];
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
      if (key === 'amount') {
        const num = parseFloat(val);
        if (isNaN(num)) {
          errors.push({
            key,
            error: `${key} must be a valid number`,
          });
        }
      }
    }
    return errors;
  }
  stripeDonate(){
    if(this.paymentLoading) return;
    this.errors = {};

    const extraData = {
      name: this.payment.name,
      amount: this.payment.amount,
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

        const amount = parseFloat(parseFloat(this.payment.amount).toFixed(2)) * 100;

        this.fb.stripeDonate(amount, response.token.id)
          .then(data => {
            if(data.success){
              this.analytics.trackEvent('Donate', 'donate', null, amount);
              this.analytics.trackUserEvent('Donate', {location: 'donate', value: amount})
              this.paymentLoading = false;
              window.location.href = data.url;
            }else{
              this.paymentLoading = false;
              this.feedbackText = 'Something Went Wrong, try again later';
              this.analytics.trackEvent('StripeFAIL', 'donate', null, amount);
            }
          })
          .catch(err => {
            this.paymentLoading = false;
            this.feedbackText = 'Something Went Wrong, try again later';
            this.analytics.trackEvent('StripeFAIL','donate', null, amount);
            console.error(err)
          });
      })
      .catch((err) => {
        this.paymentLoading = false;
        if (err.message === 'Your card number is incorrect.') {
          this.errors = {
            number: 'Invalid / incorrect card number',
          }
        } else {
          this.feedbackText = 'Something Went Wrong. Please try again later';
        }
        this.analytics.trackEvent('StripeFAIL','donate', null, amount);
      });
  }
}

PaymentController.$inject = ['stripeService', 'analyticsService', 'firebaseService', 'auth', '$timeout'];

export default PaymentController;
