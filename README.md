<a href="https://www.corp.map.ir">
  <img src="https://map.ir/css/images/site-logo.svg" width="500"/>
</a>

# Mapir SDK for React Native

## What is Mapir?
See [map.ir](http://corp.map.ir)


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
* [example](https://github.com/map-ir/Mapir-react-native-example)

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
                    style={styles.container}>
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

Here’s the complete code to display a map with static and dynamic marker:
```js

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Mapir from 'mapir-react-native-sdk'

type Props = {};
export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            markers: [
                { latitude: 51.422548, longitude: 35.732573},
            ],
        };
    }

    addMarker(coordinates) {
        this.setState({
            markers: [...this.state.markers ,{ latitude: coordinates[0], longitude: coordinates[1]}]
        });
    }
    componentDidMount() {
        {
            PermissionsAndroid.requestMultiple(
                [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION],
                {
                    title: 'Give Location Permission',
                    message: 'App needs location permission to find your position.'
                }
            ).then(granted => {
                console.log(granted);
                resolve();
            }).catch(err => {
                console.warn(err);
                reject(err);
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Mapir
                    accessToken={'YOUR ACCESS TOKEN'}
                    zoomLevel={13}
                    centerCoordinate={[51.422548, 35.732573]}
                    showUserLocation={true}
                    onLongPress={e => this.addMarker(e.geometry.coordinates)}
                    style={styles.container}>
                    <Mapir.Marker
                        id={'1'}
                        coordinate={[51.422548, 35.732573]}
                    />
                    {this.state.markers.map(markers =>
                        (<Mapir.Marker
                            id={'2'}
                            key={markers.latitude}
                            coordinate={[markers.latitude, markers.longitude ]}
                        />)
                    )}
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
Here’s the complete code to display a map with line:
```js

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Mapir from 'mapir-react-native-sdk'

type Props = {};
export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            route:
                {
                    "type": "FeatureCollection",
                    "features": [
                        {
                            "type": "Feature",
                            "properties": {},
                            "geometry": {
                                "type": "LineString",
                                "coordinates": [
                                    [
                                        51.422587,
                                        35.732549
                                    ],
                                    [
                                        51.442226,
                                        35.695909
                                    ]
                                ]
                            }
                        }
                    ]
                },
        };
    }
    componentDidMount() {
        {
            PermissionsAndroid.requestMultiple(
                [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION],
                {
                    title: 'Give Location Permission',
                    message: 'App needs location permission to find your position.'
                }
            ).then(granted => {
                console.log(granted);
                resolve();
            }).catch(err => {
                console.warn(err);
                reject(err);
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Mapir
                    accessToken={'YOUR_ACCESS_TOKEN'}
                    zoomLevel={13}
                    centerCoordinate={[51.422548, 35.732573]}
                    showUserLocation={true}
                    style={styles.container}>
                    <Mapir.Marker
                        id={'1'}
                        coordinate={[51.422548, 35.732573]}
                    />
                   
                    <Mapir.ShapeSource id='line1' shape={this.state.route}>
                        <Mapir.LineLayer id='linelayer1' style={{lineColor:'red'}} />
                    </Mapir.ShapeSource>
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
Here’s the complete code to display a map with Raster:
```js

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Mapir from 'mapir-react-native-sdk'

type Props = {};
export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            route:
                {
                    "type": "FeatureCollection",
                    "features": [
                        {
                            "type": "Feature",
                            "properties": {},
                            "geometry": {
                                "type": "LineString",
                                "coordinates": [
                                    [
                                        51.422587,
                                        35.732549
                                    ],
                                    [
                                        51.442226,
                                        35.695909
                                    ]
                                ]
                            }
                        }
                    ]
                },
        };
    }
    componentDidMount() {
        {
            PermissionsAndroid.requestMultiple(
                [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION],
                {
                    title: 'Give Location Permission',
                    message: 'App needs location permission to find your position.'
                }
            ).then(granted => {
                console.log(granted);
                resolve();
            }).catch(err => {
                console.warn(err);
                reject(err);
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Mapir
                    accessToken={'YOUR_ACCESS_TOKEN'}
                    zoomLevel={13}
                    centerCoordinate={[51.422548, 35.732573]}
                    showUserLocation={true}
                    style={styles.container}>
                    <Mapir.RasterSource
			            accessToken={'YOUR_ACCESS_TOKEN'}>
                        <Mapir.RasterLayer id="shiveh-layer"/>
                    </Mapir.RasterSource>
                    <Mapir.Marker
                        id={'1'}
                        coordinate={[51.422548, 35.732573]}
                    />
                   
                    <Mapir.ShapeSource id='line1' shape={this.state.route}>
                        <Mapir.LineLayer id='linelayer1' style={{lineColor:'red'}} />
                    </Mapir.ShapeSource>
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
* [MapView](https://github.com/map-ir/mapir-mapbox/blob/master/docs/MapView.md)
* [Marker](https://github.com/map-ir/mapir-mapbox/blob/master/docs/PointAnnotation.md)
* [Popup](https://github.com/map-ir/mapir-mapbox/blob/master/docs/Callout.md)
* [Camera](https://github.com/map-ir/mapir-mapbox/blob/master/docs/Camera.md)
* [UserLocation](https://github.com/map-ir/mapir-mapbox/blob/master/docs/UserLocation.md)
* [Images](https://github.com/map-ir/mapir-mapbox/blob/master/docs/Images.md)

### Sources
* [ShapeSource](https://github.com/map-ir/mapir-mapbox/blob/master/docs/ShapeSource.md)
* [RasterSource](https://github.com/map-ir/mapir-mapbox/blob/master/docs/RasterSource.md)

### Layers
* [FillLayer](https://github.com/map-ir/mapir-mapbox/blob/master/docs/FillLayer.md)
* [LineLayer](https://github.com/map-ir/mapir-mapbox/blob/master/docs/LineLayer.md)
* [RasterLayer](https://github.com/map-ir/mapir-mapbox/blob/master/docs/RasterLayer.md)
* [SymbolLayer](https://github.com/map-ir/mapir-mapbox/blob/master/docs/SymbolLayer.md)
