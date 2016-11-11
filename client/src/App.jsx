import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { store } from './redux/store';
import Login from './components/LoginSignup/Login.js';
import Map from './components/Map/Map.js';

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Map} />
      <Route path="/login" component={Login} />
      <Route path="/map" component={Map} />
    </Router>
  </Provider>
  ), document.getElementById('app'));
