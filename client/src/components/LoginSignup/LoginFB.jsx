import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let action = this.props.user ? () => {this.props.logout()} : () => {this.props.attemptFBLogin()};
    return (
      <div>
        <button className='signIn btn btn-info' type='button' onClick={action}>
          { this.props.user ? '' : <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg" style={{height: "1em"}} /> }
          &nbsp;
          { this.props.user ? 'Log out' : 'Log in' }
        </button>
      </div>
      )
  }
}
