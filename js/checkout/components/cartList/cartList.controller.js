class CartListController{
  remove(item){
    item.removeLoading = true;
    this.removeItem({item});
  }
}

export default CartListController;
