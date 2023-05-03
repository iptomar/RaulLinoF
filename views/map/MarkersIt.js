import MapView, { Marker, Callout } from '@mvits/react-native-maps-osmdroid';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import itinerarios from '../itinerarios';
import MarkerIcon from '../../data/img/views/mapa/marker.svg';
import MarkerIconYellow from '../../data/img/views/mapa/selectedMarker.svg';
import MapItinerary from '../../data/img/views/mapa/itinerarioIcon.svg';

export default function MarkersIt({}){
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
                        calloutEnabled={true}
                    >   
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