import React, { Component } from 'react';
import Mapbox from 'mapir-mapbox';
import PropTypes from 'prop-types';

class Camera extends Component<{}> {
  constructor(props) {
    super(props);
  }

  render() {
    return <Mapbox.Camera {...this.props}></Mapbox.Camera>;
  }
}

export default Camera;
