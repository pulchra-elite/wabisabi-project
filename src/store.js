import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import authSaga from "./containers/Login/saga";

const rootSaga = function*() {
  yield all([authSaga()]);
};

const sagaMiddleware = createSagaMiddleware(...rootSaga);

const reducer = (state = {}, action) => {
  return state;
};

const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
