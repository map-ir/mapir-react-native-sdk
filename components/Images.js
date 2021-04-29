import React, { Component } from 'react';
import Mapbox from 'mapir-mapbox';
import PropTypes from 'prop-types';

class Images extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Mapbox.Images {...this.props}></Mapbox.Images>;
  }
}

export default Images;
