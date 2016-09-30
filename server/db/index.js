const connection = require('./connection');
const User = require('./models/user');
const Place = require('./models/place');
const Itinerary = require('./models/itinerary');
const ItineraryPlace = require('./models/itineraryPlace');
const UserItinerary = require('./models/userItinerary');

User.hasMany(Itinerary);
Itinerary.belongsTo(User);

Place.belongsToMany(Itinerary, {
  through: {
    model: ItineraryPlace
  }, 
  foreignKey: 'place_id'
});
Itinerary.belongsToMany(Place, {
  through: {
    model: ItineraryPlace
  }, 
  foreignKey: 'itinerary_id'
});

User.belongsToMany(Itinerary, {
  through: {
    model: UserItinerary
  }, 
  foreignKey: 'user_id'
});
Itinerary.belongsToMany(User, {
  through: {
    model: UserItinerary
  }, 
  foreignKey: 'itinerary_id'
});

module.exports = connection;
