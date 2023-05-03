import MapView, { Marker, Callout } from '@mvits/react-native-maps-osmdroid';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import itinerarios from '../Itinerarios';
import MarkerIcon from '../../data/img/views/mapa/marker.svg';
import MarkerIconYellow from '../../data/img/views/mapa/selectedMarker.svg';

const styles = StyleSheet.create({
    bubble: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: '#bbb',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
    }
})

export default function MarkersIt(){
    const [markerStates, setMarkerStates] = useState({});
  
    //handle the Press on he Marker
    const handleMarkerPress = (itemId) => {
        setMarkerStates((prevState) => ({ ...prevState, [itemId]: !prevState[itemId] }));
    };
  
    return(
        <>
            {itinerarios.map((item) => {
                const isSelected = markerStates[item.id];
                return(
                    <Marker
                        key={item.id}
                        coordinate={{latitude: item.coords[0], longitude: item.coords[1]}}
                        onPress={() => handleMarkerPress(item.id)}
                        onCalloutPress={() => navigation.navigate('Detalhes', {itemID: item.id})}
                        calloutEnabled={true}
                    >   
                        {isSelected ? (
                            <MarkerIconYellow width="50" height="50" />
                        ) : (
                            <MarkerIcon width="50" height="50" />
                        )}
                        <Callout tooltip>
                            <View style={styles.bubble}>
                                <Text>{item.title}</Text>
                                <Text>{item.year}</Text>
                            </View>
                        </Callout>
                    </Marker>
                );
            })}
        </>
    );
}