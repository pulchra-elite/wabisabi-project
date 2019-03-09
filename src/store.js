import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const reducer = (state = {}, action) => {
  return state;
};

const store = createStore(reducer, applyMiddleware(logger));
export default store;
