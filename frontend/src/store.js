import { combineReducers, createStore, applyMiddleware } from "redux";
import { ProductReducer } from "./reducers/productReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const reducer = combineReducers({
  productList: ProductReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
