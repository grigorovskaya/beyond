const app = require('./server');
const db = require('./db');
const port = process.env.PORT || 3000;

db.sync()
.then(startServer);

function startServer() {
  app.listen(port, function() {
    console.log('Server is listening on port', port);
  });
}

module.exports = app;
