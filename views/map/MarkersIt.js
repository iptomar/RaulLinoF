import MapView, { Marker, Callout } from '@mvits/react-native-maps-osmdroid';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import itinerarios from '../Itinerarios';
import MarkerIcon from '../../data/img/views/mapa/marker.svg';
import MarkerIconYellow from '../../data/img/views/mapa/selectedMarker.svg';
import PlusBtn from '../../data/img/views/adicionarPreto.svg';

const styles = StyleSheet.create({
    bubble: {
        height: '100%', 
        width: '100%',
        backgroundColor: '#ead8c1',
        opacity: 0.9,
        borderRadius: 5,
        padding: 2,
        alignItems: 'center',
    },
    bubbleText: {
        fontFamily: 'Unbounded-Regular',
        color: '#272133',
        margin: 2,
        fontSize: 10,
        lineHeight: 13,
    },
    bubbleBtn: {
        marginBottom: 2,
    },
  });

export default function MarkersIt({ navigation, historyClicked }){
    const [markerStates, setMarkerStates] = useState({});
  
    useEffect(() => {
        if(historyClicked){
            console.log('History Clicked on Markers It');
        }
    });

    //handle the Press on he Marker
    const handleMarkerPress = (itemId) => {
        setMarkerStates((prevState) => ({ ...prevState, [itemId]: !prevState[itemId] }));
    };

    const handleAddPress = (itemID) => {
        console.log('AddPressed');
    }
  
    return(
        <>
            {itinerarios.map((item) => {
                const isSelected = markerStates[item.id];
                return(
                    <Marker
                        key={item.id}
                        coordinate={{latitude: item.coords[0], longitude: item.coords[1]}}
                        onPress={() => handleMarkerPress(item.id)}
                        calloutEnabled={true}
                    >   
                        {isSelected ? (
                            <MarkerIconYellow width="50" height="50" />
                        ) : (
                            <MarkerIcon width="50" height="50" />
                        )}
                        <Callout tooltip>
                            <View style={styles.bubble}>
                                <Text style={styles.bubbleText}>{item.title.toUpperCase()}</Text>
                                <TouchableOpacity style={styles.bubbleBtn} onPress={handleAddPress}>
                                    <PlusBtn width={40} height={40} />
                                </TouchableOpacity>
                            </View>
                        </Callout>
                    </Marker>
                );
            })}
        </>
    );
}