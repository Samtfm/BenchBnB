import * as APIUtilsS from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const logIn = (user) => dispatch => {
  return APIUtilsS.signIn(user)
    .then((res)=>(dispatch(receiveCurrentUser(res))),
    (err)=> (dispatch(receiveErrors(err))));
};
export const logOut = () => dispatch => {
  return APIUtilsS.signOut().then(dispatch(receiveCurrentUser(null)));
};

export const signUp = (user) => dispatch => {
  return APIUtilsS.signUp(user)
    .then((r)=>dispatch(receiveCurrentUser(r)),
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

window.logIn = logIn;
window.logOut = logOut;
window.signUp = signUp;
