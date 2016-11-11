const initialState = {
  user: null,
  message: null
};

const LOGIN_ATTEMPT = 'beyond/user/LOGIN_ATTEMPT';
const LOGIN_SUCCESS = 'beyond/user/LOGIN_SUCCESS';
const LOGIN_FAIL = 'beyond/user/LOGIN_FAIL';
const LOGOUT = 'beyond/user/LOGOUT';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return state;
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        user: action.user
      });
    case LOGIN_FAIL:
      return Object.assign({}, state, {
        message: action.message
      });
    case LOGOUT:
      return Object.assign({}, state, {
        user: null
      });
    default:
      return state;
  }
}

export function asyncSignupAttempt(userData) {
  return function(dispatch) {
    dispatch(loginAttempt(userData));
    fetch("signup", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(res => res.text())
      .then(dispatch(loginSuccess(userData)))
      .catch(function(err) {
        console.error(err);
      });
  }
}

export function loginAttempt(user) {
  return {
    type: LOGIN_ATTEMPT,
    user
  };
}

export function asyncFBLoginAttempt() {
  return function(dispatch) {
    dispatch(loginAttempt(null));
    fetch('/auth/status', {credentials: 'same-origin'})
      .then((response) => {
        if(response.status !== 200) {
          dispatch(loginFail('attempted login on load, failed'));
        } else {
          return response.json()
            .then((user) => {
              dispatch(loginSuccess(user));
            }); 
        }})
    .catch((err) => {
      dispatch(loginFail(err));
      console.error(err);
    });
  return null;
  }
}

export function asyncLocalLoginAttempt(userData) {
  return function(dispatch) {    
    dispatch(loginAttempt(userData));
    fetch("auth/local", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(res => res.text())
      .then(dispatch(loginSuccess(userData)))
      .catch(function(err) {
        console.error(err);
      });
      return null;
  }
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user
  };
}

export function loginFail(message) {
  return {
    type: LOGIN_FAIL,
    message
  };
}

export function logOut() {
  return {
    type: LOGOUT
  };
}
