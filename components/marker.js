import React, {Component} from './../../react'
import Mapbox from './../../mapir-mapbox'
import PropTypes from 'prop-types';

class Marker extends Component<{}> {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Mapbox.PointAnnotation
                {...this.props}
            >
            </Mapbox.PointAnnotation>
        )
    }
}

export default Marker