import React from 'react';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    let userData = {
      username: e.currentTarget[0].value,
      password: e.currentTarget[1].value
    };
    this.props.attemptSignup(userData);
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
      <input placeholder='username' name='username'/>
        <input type='password' placeholder='password' name='password'/>
        <input type='submit' value='signup' />
      </form>
      )
  }
}
