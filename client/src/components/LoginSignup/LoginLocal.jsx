import React from 'react';

export default class LoginLocal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <form onSubmit={(e) => this.props.attemptLocalLogin(e)}>
        <input placeholder='username'/>
        <input type='password' placeholder='password'/>
        <button >Log in</button>
        </form>
      </div>
      )
  }
}