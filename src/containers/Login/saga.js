import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { authSuccess, authError } from "../../actions/auth";
import { getConfig } from "../../config";

const config = getConfig();

function fetchUser(user) {
  return axios
    .post(`${config.API_HOST}/auth`, {
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

export default function* authSaga() {
  yield takeLatest("USER_FETCH_REQUESTED", authenticateUser);
}
