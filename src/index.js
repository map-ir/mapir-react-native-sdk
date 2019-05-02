import React, {Component} from './../../react'
import Mapbox from './../../mapir-mapbox'
import {Platform, View} from './../../react-native'
import PropTypes from 'prop-types';
import Marker from './../components/marker'
import ShapeSource from './../components/shapeSource';
import LineLayer from './../components/lineLayer';

const instructions = Platform.select({
    ios: true,
    android: false,
});

class Mapir extends Component<> {
    static propTypes = {
        accessToken: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props)
    }

    render() {
        Mapbox.StyleURL.Street = `https://map.ir/vector/styles/main/main_mobile_style.json?access_token=${this.props.accessToken}`;
        return (
            <Mapbox.MapView
                {...this.props}
                styleURL={Mapbox.StyleURL.Street}
                attributionEnabled={false}
                logoEnabled={instructions}
                maxZoomLevel={20}
            >
            </Mapbox.MapView>
        )
    }
}

Mapir.Marker = Marker
Mapir.ShapeSource = ShapeSource
Mapir.LineLayer = LineLayer

export default Mapir
