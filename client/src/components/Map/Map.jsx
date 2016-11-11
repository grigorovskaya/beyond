import React from 'react';
import  GoogleMap from 'google-map-react';
import { TRAVEL_GOOGLEMAPSAPI } from '../../../../apiKeys.js';
import { GoogleMapStyle } from '../../../public/styles.js';
import SearchBox from '../Locations/AddLocation.jsx';
import Marker from './Marker.jsx';

export default class GMap extends React.Component {
  constructor(props) {
    super(props);
  }

  saveLocation(location) {
    this.props.onAsyncLocationAdd(location);
  }

  componentDidMount() {
    if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            let currCoords = {
              lat: pos.coords.latitude,
              lng: pos.coords.longitude
            };
            this.props.onCurrentLocationFind(currCoords);
        });
    }     
  }

  render() {
    return(
      <div style={GoogleMapStyle}>
      <GoogleMap
        center={this.props.center}
        zoom={this.props.zoom}
        bootstrapURLKeys={{
        key: TRAVEL_GOOGLEMAPSAPI,
        libraries: ['places']
        }}>
        { console.log(this.props.savedLocations) }
        { this.props.savedLocations.map((location, index) => {
          return (
            <Marker 
              lat={location.lat}
              lng={location.lng}
              key={index}
              markerName={location.name} />
            )
        }) }
        </GoogleMap>
        <SearchBox saveLocation={(location) => this.saveLocation(location)} />
        </div>
      )
  }
}
