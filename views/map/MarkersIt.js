import MapView, { Marker, Callout } from '@mvits/react-native-maps-osmdroid';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import itinerarios from '../itinerarios';
import MarkerIcon from '../../data/img/views/mapa/marker.svg';
import MarkerIconYellow from '../../data/img/views/mapa/selectedMarker.svg';



export default function MarkersIt(){
    const [markerSelected, setMarkerSelected] = useState(false);
    //handle the Press on he Marker
    const handleMarkerPress = (itemId) => {
        setMarkerSelected((prevState) => ({ ...prevState, [itemId]: !prevState[itemId] }));
    };
    return(
        <>
            {itinerarios.map((item) => {
                const isSelected = markerSelected[item.id];
                return(
                    <Marker
                        key={item.id}
                        coordinate={{latitude: item.coords[0], longitude: item.coords[1]}}
                        onPress={handleMarkerPress(item.id)}
                        calloutEnabled={true}
                        // onPress={() => navigation.navigate('Detalhes', {itemID: item.id})}  
                    >   
                        {/* <MarkerIcon width="50" height="50"/> */}
                    {isSelected ? (
                        <MarkerIconYellow width="50" height="50" />
                    ) : (
                        <MarkerIcon width="50" height="50" />
                    )}
                    </Marker>
                    
                );
            })}
        </>
    );
}