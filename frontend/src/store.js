import { combineReducers, createStore, applyMiddleware } from "redux";
import {  ProductReducer, SingleProductReducer } from "./reducers/productReducers";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
};

const reducer = combineReducers({
  productList: ProductReducer,
  singleProduct:SingleProductReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

console.log(store.getState())

export default store;
