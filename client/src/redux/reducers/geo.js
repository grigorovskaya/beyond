const initialState = {
  currentLocation: null,
  center: {lat: 37.5047, lng: -122.4194},
  zoom: 9,
  savedLocations: [] 
};

const CURRENT_LOCATION_FIND = 'beyond/user/CURRENT_LOCATION_FIND';
const LOCATION_ADD = 'beyond/user/LOCATION_ADD';
const LOCATION_REMOVE = 'beyond/user/LOCATION_REMOVE';
const LOCATIONS_FETCH = 'beyond/user/LOCATIONS_FETCH';


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_LOCATION_FIND:
      return Object.assign({}, state, {
        currentLocation: action.currentLocation,
        center: action.currentLocation
      });
    case LOCATION_ADD:
      return state;
    case LOCATION_REMOVE:
      return state;
    case LOCATIONS_FETCH:
      return Object.assign({}, state, {
        savedLocations: action.savedLocations
      });
    default:
      return state;
  }
}

export function asyncLocationAdd(locationData) {
  return function(dispatch) {
    dispatch(locationAdd());
    fetch('geo/locations/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(locationData)
    })
      .then(res => res.text())
      .then(dispatch(asyncSavedLocationsFetch()))
      .catch(err => console.error(err));
      return null;
  }
}

export function currentLocationFind(currentLocation) {
  return {
    type: CURRENT_LOCATION_FIND,
    currentLocation
  }
}

export function asyncSavedLocationsFetch() {
  return function(dispatch) {
    fetch('geo/locations')
      .then(locations => dispatch(locationsUpdate(locations)))
      .catch(err => console.error(err));
      return null;
  }
}

export function locationsUpdate(savedLocations) {
  return {
    type: LOCATIONS_FETCH,
    savedLocations
  }
}

export function locationAdd() {
  return {
    type: LOCATION_ADD
  }
}

export function locationRemove(location) {
  return {
    type: LOCATION_REMOVE
  }
}
