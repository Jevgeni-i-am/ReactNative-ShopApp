//here will be defined how a product should look like
// MODELS+STORE/Actions+STORE/Reducers  works TOGETHER!!!!


class CartItem {
    constructor(quantity, productPrice, productTitle, sum) {
      this.quantity = quantity;
      this.productPrice = productPrice;
      this.productTitle = productTitle;
      this.sum = sum;
    }
  }
  
  export default CartItem;
  