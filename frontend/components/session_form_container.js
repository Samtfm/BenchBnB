
import { login, signup } from '../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  formType: ownProps.location.pathname === '/signup' ? 'signup': 'login'
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = ownProps.location.pathname === '/signup' ?
    (user) => dispatch(signup(user)) :
    (user) => dispatch(login(user));
  console.log(processForm);
  return {
    processForm: (user) => dispatch(processForm(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
