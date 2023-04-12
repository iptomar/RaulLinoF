import * as React from 'react';
import { View, Text } from 'react-native';

import MapView, {Marker} from '@mvits/react-native-maps-osmdroid';
import itinerarios from '../../data/json/itinerarios.json';
import markerIcon from '../../data/img/views/mapa/marker.svg';

// Returns the initial map state (Abrantes)
function getInitialState() {
    return {
        latitude: 39.4680,
        longitude: -8.1965,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
}

// Returns the number of buildings
function numItinerarios(){
    return itinerarios.dados.length;
}

// Sets a Map Marker of a building
function setMarker(coordinate, title, description){

}

// Loads all buildings into Markers
function loadItinerarios(){
    for(let i=0; i<numItinerarios(); i++){
        
    }
}

export default function Map({ navigation }) {
    return (
        <MapView
            style={{height:"100%"}}
            initialRegion={getInitialState()}>
            <Marker
                // ^ Marker de Teste
                coordinate={test={latitude: 39.461152, longitude: -8.199535}}
                title={"Rua Luís de Camões"}
                description={"Rua Luís de Camões, nº 28"}
                // NOTA: Icons/images não aceitam svgs :')
                // TODO: Converter SVGs em PNGs manualmente ou por uma biblioteca
                //icon={require={markerIcon}}
            />
        </MapView>
    );
}