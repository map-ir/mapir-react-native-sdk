import React, {Component} from './../../react'
import Mapbox from './../../mapir-mapbox'
import {Platform, View} from './../../react-native'
import PropTypes from 'prop-types';
import Marker from './../components/marker'
import ShapeSource from './../components/shapeSource';
import LineLayer from './../components/lineLayer';
import RasterSource from './../components/RasterSource';
import RasterLayer from './../components/RasterLayer';
<<<<<<< HEAD
=======
import Popup from "./../components/popup";
import Camera from "./../components/Camera";
import SymbolLayer from "./../components/SymbolLayer";
import UserLocation from './../components/UserLocation';
import Images from './../components/Images';
import FillLayer from "./../components/fillLayer";
>>>>>>> 49b2232f754cb9352080c43978f6254263fc0cd0

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
<<<<<<< HEAD
        Mapbox.apiKey(this.props.accessToken)
        Mapbox.StyleURL.Street = `https://map.ir/vector/styles/main/main_mobile_style.json?x-api-key=${this.props.accessToken}`;
        return (
            <Mapbox.MapView
                {...this.props}
                styleURL={Mapbox.StyleURL.Street}
=======
        if (Platform === 'android') {
            Mapbox.apiKey(this.props.accessToken)
        }
        return (
            <Mapbox.MapView
                {...this.props}
>>>>>>> 49b2232f754cb9352080c43978f6254263fc0cd0
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
Mapir.RasterSource = RasterSource
Mapir.RasterLayer = RasterLayer
<<<<<<< HEAD
=======
Mapir.Popup = Popup
Mapir.Camera = Camera
Mapir.SymbolLayer = SymbolLayer
Mapir.UserLocation = UserLocation
Mapir.Images = Images
Mapir.FillLayer = FillLayer
>>>>>>> 49b2232f754cb9352080c43978f6254263fc0cd0

export default Mapir
