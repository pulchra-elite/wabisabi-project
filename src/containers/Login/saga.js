import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { authSuccess, authError } from "../../actions/auth";

function fetchUser(user) {
  axios
    .post("//localhost:3000/api/v1/auth", {
      email: user.email,
      password: user.password
    })
    .then(response => response.data)
    .catch(err => {
      throw err;
    });
}

function* authenticateUser(action) {
  try {
    const user = yield call(fetchUser, action.user);
    yield put(authSuccess(user));
  } catch (e) {
    yield put(authError(e.message));
  }
}

function* authSaga() {
  yield takeLatest("USER_FETCH_REQUESTED", authenticateUser);
}

export default authSaga;
