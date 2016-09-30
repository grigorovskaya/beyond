import React from 'react';
import LoginLocal from './LoginLocal.jsx';
import LoginFB from './LoginFB.jsx';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  attemptFBLogin() {
    this.props.onLoginAttempt();
    window.location = window.location.origin + "/auth/facebook";
  }

  logout() {
    this.props.onLogout();
    window.location = window.location.origin + "/logout";
  }

  attemptLocalLogin(event) {
    event.preventDefault();
    this.props.onLoginAttempt();
    console.log('trying to log in');
  }

  render() {
    return (
      <div>
      <LoginLocal user={this.props.user} attemptLocalLogin={(e) => this.attemptLocalLogin(e)}/>
      <LoginFB user={this.props.user} attemptFBLogin={() => this.attemptFBLogin()} logout={() => this.logout()}/>
      </div>
      )
  }
}