import {RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER,
  receiveCurrentUser,
  receiveErrors} from '../actions/session_actions';
import merge from 'lodash/merge';
const initialState = { currentUser: null, errors: [] };

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge(newState, {currentUser: action.currentUser});
      console.log(newState);
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
