class CartListController{
  $onInit(){
    this.removeLoading = false;
  }
  remove(item){
    this.removeLoading = true;
    this.removeItem({item});
  }
}

export default CartListController;
