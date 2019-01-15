import React, {Component} from './../../react'
import Mapbox from './../../mapir-mapbox'
import {Platform, View} from './../../react-native'

Mapbox.setAccessToken('pk.mapir');
Mapbox.StyleURL.Street = 'https://map.ir/vector/styles/main/main_mobile_style.json';

const instructions = Platform.select({
    ios: true,
    android: false,
});

class Mapir extends Component<{}> {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Mapbox.MapView
                {...this.props}
                styleURL={Mapbox.StyleURL.Street}
                attributionEnabled={false}
                logoEnabled={instructions}
            >
            </Mapbox.MapView>
        )
    }
}

export default Mapir
