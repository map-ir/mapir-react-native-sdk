import React, {Component} from './../../react'
import Mapbox from './../../mapir-mapbox'
import PropTypes from 'prop-types';

class ShapeSource extends Component<{}> {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Mapbox.ShapeSource
                {...this.props}
            >
            </Mapbox.ShapeSource>
        )
    }
}

export default ShapeSource