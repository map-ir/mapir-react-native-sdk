import React, {Component} from './../../react'
import Mapbox from './../../mapir-mapbox'
import PropTypes from 'prop-types';

class RasterSource extends Component<{}> {

    static propTypes = {
        accessToken: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Mapbox.RasterSource
                {...this.props}
                id={'shiveh'}
                url={`https://map.ir/vector/mobile/1.0.0/Shiveh:Shiveh@EPSG:3857@png/{z}/{x}/{y}.png?x-api-key=${this.props.accessToken}`}
                minZoomLevel={12}
                tms={true}
                tileSize={256}
            >
            </Mapbox.RasterSource>
        )
    }
}

export default RasterSource