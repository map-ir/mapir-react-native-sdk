import React, { Component } from 'react';
import Mapbox from 'mapir-mapbox';
import PropTypes from 'prop-types';

class LineLayer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Mapbox.LineLayer {...this.props}></Mapbox.LineLayer>;
  }
}

export default LineLayer;
