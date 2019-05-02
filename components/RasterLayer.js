import React, {Component} from './../../react'
import Mapbox from './../../mapir-mapbox'
import PropTypes from 'prop-types';

class RasterLayer extends Component<{}> {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Mapbox.RasterLayer
                {...this.props}
            >
            </Mapbox.RasterLayer>
        )
    }
}

export default RasterLayer