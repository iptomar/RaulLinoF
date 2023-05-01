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

// Calculates the distance between two coordinates using the haversine formula
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;  // deg2rad below
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      0.5 - Math.cos(dLat) / 2 +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      (1 - Math.cos(dLon)) / 2;
  
    const distanceInKm = R * 2 * Math.asin(Math.sqrt(a)); // Distance in km
    const distanceInMeters = distanceInKm * 1000; // Distance in meters

    return distanceInMeters;
}


export default function Map({ navigation }) {
    const [distance, setDistance] = React.useState(null);
    const [point1, setPoint1] = React.useState(null);
    const [point2, setPoint2] = React.useState(null);
    const [selectedMarker, setSelectedMarker] = React.useState(null);
    const [markers, setMarkers] = React.useState([
        {
            title: "Ponto A",
            description: "A",
            coordinate: {
                latitude: 39.461152, 
                longitude: -8.189
            },
            pinColor: "red",
            isSelected: false
        },
        {
            title: "Ponto B",
            description: "B",
            coordinate: {
                latitude: 39.4705,
                longitude: -8.2099
            },
            pinColor: "blue",
            isSelected: false
        },
        {
            title: "Ponto C",
            description: "C",
            coordinate: {
                latitude: 39.4905,
                longitude: -8.2099
            },
            pinColor: "blue",
            isSelected: false
        }
        ,
        {
            title: "Ponto D",
            description: "D",
            coordinate: {
                latitude: 39.4805,
                longitude: -8.2099
            },
            pinColor: "blue",
            isSelected: false
        }
    ]);

    const handleMarkerPress = (index) => {
        const newMarkers = [...markers];
        newMarkers[index].isSelected = !newMarkers[index].isSelected;
        setMarkers(newMarkers);
        
        if (newMarkers[index].isSelected) {
          alert(newMarkers[index].title);
        }
      };


React.useEffect(() => {
    const selectedMarkers = markers.filter((marker) => marker.isSelected);
    if (selectedMarkers.length >= 2) {
        const lat1 = selectedMarkers[0].coordinate.latitude;
        const long1 = selectedMarkers[0].coordinate.longitude;
        const lat2 = selectedMarkers[1].coordinate.latitude;
        const long2 = selectedMarkers[1].coordinate.longitude;   
        const distance = getDistance(lat1, long1, lat2, long2);
        setDistance(Number(distance.toFixed(0))); // Format the distance as a string with zero decimal places and convert it back to a number
        setPoint1(selectedMarkers[0].title);
        setPoint2(selectedMarkers[1].title);
    } else {
        setDistance(null);
        setPoint1(null);
        setPoint2(null);
    }
}, [markers]);

return (
    <View style={{flex: 1}}>
        <MapView
            style={{flex: 1}}
            initialRegion={getInitialState()}>
            {markers.map((marker, index) => (
                <Marker
                    key={index}
                    coordinate={marker.coordinate}
                    title={selectedMarker === index ? marker.title : null}
                    description={marker.description}
                    pinColor={marker.isSelected ? "green" : marker.pinColor}
                    onPress={() => handleMarkerPress(index)}
                />
            ))}
        </MapView>
        {distance !== null && (
            <View style={{position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'white', padding: 10}}>
                <Text>Distância entre {point1} e  {point2}: {distance} metros</Text>
            </View>
        )}
    </View>
);
}