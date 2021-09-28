import { combineReducers, createStore, applyMiddleware } from "redux";
import {
  ProductReducer,
  SingleProductReducer
} from "./reducers/productReducers";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducers";

const initialState = {
  cart:{
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    totalPrice: localStorage.getItem('totalPrice') ? JSON.parse(localStorage.getItem('totalPrice')) : []
  }

};

const reducer = combineReducers({
  productList: ProductReducer,
  singleProduct: SingleProductReducer,
  cart: cartReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

console.log(store.getState());

export const selectProductState = (state) => state.productList;
export const selectSingleProductState = (state) => state.singleProduct;

export const selectCartState = state =>state.cart;

export default store;
