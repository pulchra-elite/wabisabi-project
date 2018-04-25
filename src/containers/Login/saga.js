import { call, put, takeLatest } from "redux-saga/effects";

function lel(id) {
  return {
    name: "ken",
    id: 1
  };
}

function* authenticateUser(action) {
  try {
    const user = yield call(lel, action.payload.userId);
    yield put({ type: "USER_AUTH_SUCCESS", user: user });
  } catch (e) {
    yield put({ type: "USER_AUTH_FAILED", message: e.message });
  }
}

function* authSaga() {
  yield takeLatest("USER_FETCH_REQUESTED", authenticateUser);
}

export default authSaga;
