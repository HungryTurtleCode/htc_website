class CartService{
  constructor(firebaseService, analytics) {
    this.fb = firebaseService;

    this.cart = [];
  }
  getCart() {
    this.fb.getUserCart()
      .then(cart => {
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
    // TODO make item safe ie no slashes Fri 21 Jul 2017 00:07:35 UTC
    return this.api.delete(`/cart/${item}`)
      .then(res => {
        // TODO what is returned here? Wed 26 Jul 2017 13:04:32 UTC
        // TODO update the cart with the return value Wed 26 Jul 2017 13:04:45 UTC
        console.log(res);
      });
  }
}

CartService.$inject = ['firebaseService'];

export default CartService;
