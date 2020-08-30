import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { productsReducer } from "./reducers/productReducer";
import thunk from "redux-thunk";
import { orderReducer } from "./reducers/orderReducer";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    products: productsReducer,
    order: orderReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
