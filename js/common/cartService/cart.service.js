class CartService{
  constructor(firebaseService, analytics) {
    this.fb = firebaseService;

    this.cart = [];
    this.loading = false;
  }
  getCart() {
    this.loading = true;
    this.fb.getUserCart()
      .then(cart => {
        this.loading = false;
        this.cart = cart;
      });
  }
  isInCart(item){
    if(this.cart.length){
      for(let i = 0; i < this.cart.length; i++){
        if(this.cart[i].id === item){
          return true
        }
      }
    }
    // TODO add an api endpoint to get check this Wed 26 Jul 2017 12:59:15 UTC
    return false;
  }
  addToCart(courseData){
    if(courseData){
      for(let i = 0; i < this.cart.length; i++){
        if(this.cart[i].id === courseData.id){
          return Promise.reject(false);
        }
      }

      return this.fb.addToCart(courseData)
        .then(() => true);
    }
    return Promise.reject(false);
  }
  getTotal(){
    if(this.cart){
      return this.cart.reduce((num, val) => {
        return parseInt(num) + parseInt(val.price);
      }, 0);
    }
    return 0;
  }
  removeFromCart(item){
    return this.fb.removeFromCart(item)
      .then(success => {
        if(success) {
          let index = this.cart.indexOf(item);
          if(index > -1) {
            this.cart.splice(index, 1);
          }
          // TODO update the cart Fri 10 Nov 2017 15:08:31 UTC
        } else {
          // TODO display error Fri 10 Nov 2017 15:07:51 UTC
        }
      });
  }
}

CartService.$inject = ['firebaseService'];

export default CartService;
