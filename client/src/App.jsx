import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { store } from './redux/store';
import Login from './components/LoginSignup/Login.js';

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Login} />
      <Route path="auth/facebook" component={Login} />
    </Router>
  </Provider>
  ), document.getElementById('app'));
