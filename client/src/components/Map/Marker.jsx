import React from 'react';
import { markerStyle } from '../../../public/styles.js';

export default class Marker extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={markerStyle}
      >
      {this.props.markerName}
      </div>
      )
  }
}