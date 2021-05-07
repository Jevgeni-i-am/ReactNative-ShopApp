import { ADD_TO_CART } from "../actions/cart"
import CartItem from "../../models/cartItem";



const initialState = {
    items: {},
    totalAmount: 0
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const addedProduct = action.product;
        const prodPrice = addedProduct.price;
        const prodTitle = addedProduct.title;

            //Using updatedOrNewCartItem in NEW, UPDATED and RETURN
            let updatedOrNewCartItem;

            if (state.items[addedProduct.id]) {
                //already have item in the cart, update!
                updatedOrNewCartItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice
                )
            } else {
                //add new item
                updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice)
            }
            return {
                ...state,
                item: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
                totalAmount: state.totalAmount + prodPrice
            }
    }
    return state
}
