const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const geo = require('./controllers/geo.controller');
const auth = require('./controllers/auth.controller');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(session({
  store: new RedisStore({
    url: 'redis://redis-session'
  }),
  secret: process.env.SESSION_SECRET || 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
auth.loadController(app);
geo.loadController(app);
app.use(express.static(__dirname + '/../client/public'));

module.exports = app;
