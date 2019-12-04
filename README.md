# MapirReatNativeSDK
[![npm version](https://badge.fury.io/js/mapir-react-native-sdk.svg)](https://www.npmjs.com/package/mapir-react-native-sdk)


![Map.ir](https://map.ir/css/images/mapir-logo.png) React Native wrapper for mapbox-gl-js. Expose a bunch of component meant to be simple to use for React Native.

## Get API Key
🔑 You should first get api key from [Map.ir](https://corp.map.ir/registration/)


## Installation

**Dependencies**

* [node](https://nodejs.org)
* [npm](https://www.npmjs.com/)
* [React Native](https://facebook.github.io/react-native/) recommended version 0.59

```
npm install mapir-react-native-sdk
```

### Platform Specific Installation Guides

* [Android](https://github.com/map-ir/mapir-mapbox/blob/master/android/install.md)
* [iOS](https://github.com/map-ir/mapir-mapbox/blob/master/ios/install.md)
* [example](https://github.com/map-ir/Mapir-react-native-example)

## Quick start 

### Import module

```js
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Mapir from 'mapir-react-native-sdk'
```

### Generate Component
```jsx
type Props = {};
export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Mapir
		    apiKey={'YOUR API KEY'}
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

📖 [English Documentation](https://github.com/map-ir/mapir-react-native-sdk/wiki/Documentation)

📖 [Persian Documentation](https://support.map.ir/developers/reactnative/)
