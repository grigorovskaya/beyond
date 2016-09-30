import { connect } from 'react-redux';
import * as actions from '../../redux/reducers/auth';
import LoginPage from './LoginPage.jsx';

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    message: state.auth.message
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    onLoginAttempt: () => {
      dispatch(actions.loginAttempt())
    },
    onLoginSuccess: (user) => {
      dispatch(actions.loginSuccess(user))
    },
    onLoginFail: (message) => {
      dispatch(actions.loginFail(message))
    },
    onLogout: () => {
      dispatch(actions.logOut())
    }
  }
};

const Login = connect(
  mapStateToProps, mapDispatchToProps)(LoginPage);

export default Login;
