import React, { Component } from 'react';
import Mapbox from 'mapir-mapbox';
import PropTypes from 'prop-types';

class FillLayer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Mapbox.FillLayer {...this.props}></Mapbox.FillLayer>;
  }
}

export default FillLayer;
