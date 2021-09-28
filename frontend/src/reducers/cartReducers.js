import { CART_ADD_ITEM } from "../constants/productConstants";

export const cartReducer = (
  state = { cartItems: [], totalPrice: [] },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      
      const totalPrice =  item.price * item.qty;
      console.log(state.totalPrice);
      console.log(state.cartItems);
      const existItem = state.cartItems.find(
        (el) => el.product === item.product
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
          totalPrice: [...state.totalPrice, totalPrice],
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
          totalPrice: [...state.totalPrice, totalPrice],
        };
      }

    default:
      return state;
  }
};
