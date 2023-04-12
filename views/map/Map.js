import * as React from 'react';
import { View, Text } from 'react-native';
import MapView from '@mvits/react-native-maps-osmdroid';

export default function Map({ navigation }) {
    return (
        <MapView style={{height:"100%"}}
            initialRegion={{
                latitude: 39.4680,
                longitude: -8.1965,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
    );
}