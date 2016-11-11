import React from 'react';
import LoginLocal from './LoginLocal.jsx';
import LoginFB from './LoginFB.jsx';
import Signup from './Signup.jsx';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  attemptSignup(userData) {
    this.props.onAsyncSignupAttempt(userData);
  }

  attemptLocalLogin(userData) {
    this.props.onAsyncLocalLoginAttempt(userData);
  }

  attemptFBLogin() {
    window.location = window.location.origin + "/auth/facebook";
    this.props.onAsyncFBLoginAttempt();
  }

  logout() {
    this.props.onLogout();
    window.location = window.location.origin + "/logout";
  }

  render() {
    return (
      <div>
      <LoginLocal attemptLocalLogin={(data) => this.attemptLocalLogin(data)} />
      <LoginFB user={this.props.user} attemptFBLogin={() => this.attemptFBLogin()} logout={() => this.logout()} />
      <Signup attemptSignup={(data) => this.attemptSignup(data)} />
      </div>
      )
  }
}
