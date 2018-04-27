export function authRequest(user) {
  return {
    type: "USER_FETCH_REQUESTED",
    user
  };
}

export function authSuccess(user) {
  return {
    type: "USER_AUTH_SUCCESS",
    user
  };
}

export function authError(message) {
  return {
    type: "USER_AUTH_ERROR",
    message
  };
}
