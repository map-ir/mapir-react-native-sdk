import React, {Component} from './../../react'
import Mapbox from './../../mapir-mapbox'
import PropTypes from 'prop-types';

class SymbolLayer extends Component<{}> {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Mapbox.SymbolLayer
                {...this.props}
            >
            </Mapbox.SymbolLayer>
        )
    }
}

export default SymbolLayer