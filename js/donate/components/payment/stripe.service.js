let stripeKey;
// TODO probably fetch this from an env file or something Mon 01 Oct 2018 15:57:59 BST
if (process.env.NODE_ENV === 'production') {
  console.log('Using production stripe key');
  stripeKey = 'pk_live_8AiJNP3D2ikErsRc1nlDsIpd';
} else {
  console.log('Using development stripe key');
  stripeKey = 'pk_test_Bpwo13jPYFDQVWrppyb02I4E';
}

class StripeService{
  constructor(firebaseService) {
    this.stripe = Stripe(stripeKey);
    this.elements = this.stripe.elements();
  }
  createElement(type, options) {
    return this.elements.create(type, options);
  }
}

StripeService.$inject = [];

export default StripeService;
