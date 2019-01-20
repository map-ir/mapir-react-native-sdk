<a href="https://www.corp.map.ir">
  <img src="https://map.ir/css/images/site-logo.svg" width="500"/>
</a>

# Mapir SDK for React Native


## Table of Contents
- [Installation](#installation)
	-	[Platform Specific Guides](#platform-specific-installation-guides)
- [MapView](#initializing-a-map)
- [Documentation](#documentation)
  - [Components](#components)
  - [Sources](#sources)
  - [Layers](#layers)

## Installation

**Dependencies**

* [node](https://nodejs.org)
* [npm](https://www.npmjs.com/)
* [React Native](https://facebook.github.io/react-native/) recommended version 0.50 or greater

**Npm**
```
npm install mapir-react-native-sdk
```

## Platform Specific Installation Guides

* [Android](https://github.com/map-ir/mapir-mapbox/blob/master/android/install.md)
* [iOS](https://github.com/map-ir/mapir-mapbox/blob/master/ios/install.md)

Here’s the complete code to display a map:

```js
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Mapir from 'mapir-react-native-sdk'



type Props = {};
export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Mapir
		    accessToken={'YOUR ACCESS TOKEN'}
                    zoomLevel={13}
                    centerCoordinate={[51.422548, 35.732573]}
                    style={styles.container}
                    accessToken{'YOUR ACCESS TOKEN'}>
                </Mapir>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
```





## Documentation

Mapir SDK is based on [Mapbox Maps SDK for React Native v6.1.3](https://github.com/mapbox/react-native-mapbox-gl) and provides extra API methods over Mapbox. 
For more information about how to use MapView and other components such as **Adding Markers**, **Showing Current Location**, etc., please see [Mapbox for React Native First Steps](https://www.mapbox.com/help/first-steps-react-native-sdk/).


### Components
* [MapView](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/MapView.md)
* [Light](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/Light.md)
* [StyleSheet](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/StyleSheet.md)
* [PointAnnotation](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/PointAnnotation.md)
* [Callout](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/Callout.md)

### Sources
* [VectorSource](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/VectorSource.md)
* [ShapeSource](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/ShapeSource.md)
* [RasterSource](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/RasterSource.md)

### Layers
* [BackgroundLayer](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/BackgroundLayer.md)
* [CircleLayer](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/CircleLayer.md)
* [FillExtrusionLayer](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/FillExtrusionLayer.md)
* [FillLayer](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/FillLayer.md)
* [LineLayer](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/LineLayer.md)
* [RasterLayer](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/RasterLayer.md)
* [SymbolLayer](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/SymbolLayer.md)
