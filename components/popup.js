import React, {Component} from './../../react'
import Mapbox from './../../mapir-mapbox'
import PropTypes from 'prop-types';

class Popup extends Component<{}> {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Mapbox.Callout
                {...this.props}
            >
            </Mapbox.Callout>
        )
    }
}

export default Popup;