import { connect } from 'react-redux';
import * as actions from '../../redux/reducers/geo';
import GMap from './Map.jsx';

const mapStateToProps = (state) => {
  return {
    currentLocation: state.geo.currentLocation,
    center: state.geo.center,
    zoom: state.geo.zoom,
    savedLocations: state.geo.savedLocations
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCurrentLocationFind: (currentLocation) => {
      dispatch(actions.currentLocationFind(currentLocation))
    },
    onLocationAdd: () => {
      dispatch(actions.locationAdd())
    },
    onAsyncLocationAdd: (location) => {
      dispatch(actions.asyncLocationAdd(location))
    },
    onAsyncSavedLocationsUpdate: (savedLocations) => {
      dispatch(actions.asyncSavedLocationsUpdate(savedLocations))
    },
    onLocationRemove: (location) => {
      dispatch(actions.locationRemove(location))
    }
  }
}


const Map = connect(mapStateToProps, mapDispatchToProps)(GMap);
export default Map;
