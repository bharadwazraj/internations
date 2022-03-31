import { createStore, compose } from "redux";
import reducer from "./reducers";

const middlewares = [];

if (window.devToolsExtension) {
  middlewares.push(window.devToolsExtension());
}

const store = createStore(reducer, compose(...middlewares));

export default store;
