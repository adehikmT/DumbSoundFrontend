import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers/index";
import promise from "redux-promise-middleware";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  storeEnhancers(applyMiddleware(promise))
);

export default store;
