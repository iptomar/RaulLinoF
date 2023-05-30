import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
//markers
import MarkerMyLocal from '../../data/img/views/mapa/currentPositionCircle.svg';
import MapItinerary from '../../data/img/views/mapa/itinerarioIcon.svg';
import MapHistory from '../../data/img/views/mapa/historiaOnClickIcon.svg';
import MarkersIt from './MarkersIt';
import MapView, { Marker, Callout  } from '@mvits/react-native-maps-osmdroid';
import MarkerIconYellow from '../../data/img/views/mapa/selectedMarker.svg';
//location stuff
import { PermissionsAndroid, Platform } from 'react-native';
import * as Permissions from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import itinerarios from '../Itinerarios';


const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 20,
        right: 0,
        backgroundColor: '#272133',
        padding: 10,
        borderRadius: 5,
    },
    button2: {
        position: 'absolute',
        top: 80,
        right: 0,
        backgroundColor: '#272133',
        padding: 10,
        borderRadius: 5,
    },
});
// Returns the initial map state (Abrantes)
function getInitialState() {
    return {
        latitude: 39.4680,
        longitude: -8.1965,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
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

//Returns the id of closest building to the user
function getClosest(userlat, userlon){
    let distance = 10000000;
    let building;
    {itinerarios.map((item) => {
        let lat1 = item.coords[0];
        let lon1 = item.coords[1];
        let tempdist = getDistance(lat1,lon1,userlat,userlon);
        if(tempdist < distance){
            distance = tempdist;
            building = item.id;
        }
        
    })}
    console.log(building);
    
    return{building}
}
 export default function Map({ navigation }) {
    const [currentLocation, setCurrentLocation] = useState(false);
    const [historyClicked, setHistoryClicked] = useState(true);

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
            setSelectedMarker(index);
        } else {
            setSelectedMarker(null);

        }

        //if (newMarkers[index].isSelected) {
        //    alert(newMarkers[index].title);
        //  }
    };
    
    const handleResetPress = () => {
        const newMarkers = markers.map(marker => ({...marker, isSelected: false}));
        setMarkers(newMarkers);
        setDistance(null);
        setPoint1(null);
        setPoint2(null);
        setSelectedMarker(null);
    };

      

React.useEffect(() => {
    const selectedMarkers = markers.filter((marker) => marker.isSelected);
    if (selectedMarkers.length >= 2) {
        const lat1 = selectedMarkers[0].coordinate.latitude;
        const long1 = selectedMarkers[0].coordinate.longitude;
        const lat2 = selectedMarkers[1].coordinate.latitude;
        const long2 = selectedMarkers[1].coordinate.longitude;   
        const distance = getDistance(lat1, long1, lat2, long2);
        setDistance(Number(distance.toFixed(0))); 
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
                    //title={selectedMarker === index ? marker.title : null}
                    description={marker.description}
                    pinColor={marker.isSelected ? "green" : marker.pinColor}
                    onPress={() => handleMarkerPress(index)}
                />
            ))}
        </MapView>
        {distance !== null && (
                    <View style={{flexDirection: 'row'}}>
                    <View style={{backgroundColor: 'white', padding: 10, flex: 1}}>
                      <Text>
                        Distância entre {point1} e {point2}: {distance} metros
                      </Text>
                    </View>
                    <View style={{backgroundColor: 'white', padding: 10}}>
                      <Button title="Reset" onPress={handleResetPress} color="#008080" />
                    </View>
                  </View> 
        )}
    </View>
);
}
