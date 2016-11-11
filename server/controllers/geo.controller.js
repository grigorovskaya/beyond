const express = require('express');
const Place = require('../db/models/place');


function loadController(app) {

  let routes = express.Router();
  routes.post('/geo/locations/add', (req, res) => {
      Place.findOrCreate({ where: { name: req.body.name },
        defaults: { 
          address: req.body.formatted_address,
          lat: req.body.geometry.location.lat,
          lng: req.body.geometry.location.lng
          //TODO: req.body.types = array of categories, figure out how to use it
        }})
        .spread(function(location, created) {
          console.log(location, created)
        })
        .then(location => {
          res.send('ok');
        })
        .catch(err => {
          console.error(err);
        });
    });

  routes.get('/geo/locations', (req, res) => {
    Place.findAll()
      .then(locations => {
        res.json(locations);
        // res.send('ok');
      }).catch(err => {
        console.error(err);
      });
  });

  app.use(routes);
}

module.exports = {
  loadController
};
