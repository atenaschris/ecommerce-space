import { REMOVE_ITEM, CART_ADD_ITEM } from "../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], totalPrice: [] },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      let totalPrice = item.price * item.qty;
      console.log(item);
      console.log(totalPrice);
      const existItem = state.cartItems.find(
        (el) => el.product === item.product
      );

      if (existItem) {
        const existItemIndex = state.cartItems.findIndex(
          (el) => el.product === item.product
        );

        state.totalPrice[existItemIndex] = totalPrice;

        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
          totalPrice: state.totalPrice,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
          totalPrice: [...state.totalPrice, totalPrice],
        };
      }

    case REMOVE_ITEM:
      const itemToRemove = action.payload;
      const existItemIndexToRemove = state.cartItems.findIndex(
        (el) => el.product === itemToRemove.product
      );

      const filteredItems = state.cartItems.filter(
        (el) => el.product !== itemToRemove.product
      );

      return {
        ...state,
        cartItems: filteredItems,
        totalPrice: [
          ...state.totalPrice,
          state.totalPrice.splice(existItemIndexToRemove, 1),
        ],
      };
    default:
      return state;
  }
};
