import React from 'react';

export default class LoginLocal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    let userData = {
      username: e.currentTarget[0].value,
      password: e.currentTarget[1].value
    };
    this.props.attemptLocalLogin(userData);
  }

  render() {
    return (
      <div>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input placeholder='username' name='username'/>
        <input type='password' placeholder='password' name='password'/>
        <input type='submit' value='ok' />
        </form>
      </div>
      )
  }
}
