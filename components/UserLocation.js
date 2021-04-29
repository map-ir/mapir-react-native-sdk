import React, { Component } from 'react';
import Mapbox from 'mapir-mapbox';
import PropTypes from 'prop-types';

class UserLocation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Mapbox.UserLocation {...this.props}></Mapbox.UserLocation>;
  }
}

export default UserLocation;
