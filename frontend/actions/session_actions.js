import * as APIUtilsS from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const login = (user) => dispatch => {
  return APIUtilsS.signin(user)
    .then((res)=>(dispatch(receiveCurrentUser(res))),
    (err)=> (dispatch(receiveErrors(err))));
};
export const logout = () => dispatch => {
  return APIUtilsS.signout().then(dispatch(receiveCurrentUser(null)));
};

export const signup = (user) => dispatch => {
  return APIUtilsS.signup(user)
    .then((r)=> dispatch(receiveCurrentUser(r)),
      (err)=>(dispatch(receiveErrors(err))));
};

export const receiveCurrentUser = (currentUser = null) =>({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors = []) => ({
  type: RECEIVE_ERRORS,
  errors
});

window.login = login;
window.logout = logout;
window.signup = signup;
