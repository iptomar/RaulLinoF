import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
//markers
import MarkerMyLocal from '../../data/img/views/mapa/currentPositionCircle.svg';
import MapItinerary from '../../data/img/views/mapa/itinerarioIcon.svg';
import MapHistory from '../../data/img/views/mapa/historiaOnClickIcon.svg';
import MarkersIt from './MarkersIt';

import MapView, { Marker, Callout, Polyline } from '@mvits/react-native-maps-osmdroid';
import MarkerIconYellow from '../../data/img/views/mapa/selectedMarker.svg';
//location stuff
import { PermissionsAndroid, Platform } from 'react-native';
import * as Permissions from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import itinerarios from '../itinerarios';


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

    //for the buttons on the top right corner
    useEffect(() => {
        //...
      }, []);

    //permissoons for the location - granted or not?
    useEffect(() => {
        const checkLocationPermission = async () => {
            if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Permission Required',
                    message: 'This app requires access to your location.',
                },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Location permission granted');
                } else {
                    console.log('Location permission denied');
                }
            }
             else if (Platform.OS === 'ios') {
                Geolocation.requestAuthorization();
            } 
        };
    
        checkLocationPermission();
       
    }, []);

    

    //get the current location of the phone
    useEffect(() => {
            
        const getCurrentLocation = async () => {
            try {
                const granted = await PermissionsAndroid.check(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                );
                if (granted) {
                    Geolocation.getCurrentPosition(
                        position => {
                            setCurrentLocation({
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                                
                            });
                            getClosest(position.coords.latitude,position.coords.longitude)
                        },
                        error => {
                            console.log('Error setting the location. Error:', error);
                        },
                        // precisao do GPS 
                        {enableHighAccuracy: false, timeout: 30000, maximumAge: 10000 },
                     
                );
                } else {
                console.log('Location permission denied');
                }
            } catch (err) {
                console.warn(err);
            }
            };
        
            getCurrentLocation();
        }, []);

        const handleHistoryPress = () => {
            setHistoryClicked((prevState) => !prevState);
        }

        const [polylinesVisible, setPolylinesVisible] = useState(false);

    return (
        <View style={{ height: '100%' }}>
            <MapView
                style={{height: '100%'}}
                initialRegion={getInitialState()}>
                {currentLocation && (
                    <Marker 
                        coordinate={currentLocation} 
                        title  ="My Location">
                       {console.log("Minha localização: ",currentLocation)}
                       <MarkerIconYellow width="50" height="50" />
                    </Marker>
                    
                )}
                {/* Markers from the "itenerarios.js" file */}
                <MarkersIt historyClicked={historyClicked} navigation={navigation}/>
                
                {polylinesVisible && (
                <>
                <Polyline coordinates={[
			{ latitude: 39.463440, longitude: -8.201998 },
			{ latitude: 39.46346, longitude: -8.20191 },
            { latitude: 39.46394, longitude: -8.2006 },
            { latitude: 39.46395, longitude: -8.20055 },
            { latitude: 39.46391, longitude: -8.20048 },
            { latitude: 39.4639, longitude: -8.20029 },
            { latitude: 39.46391, longitude: -8.20023 },
            { latitude: 39.46399, longitude: -8.19978 },
            { latitude: 39.46403, longitude: -8.19943 },
            { latitude: 39.46401, longitude: -8.1993 },
            { latitude: 39.46398, longitude: -8.19926 },
            { latitude: 39.46392, longitude: -8.1992 },
            { latitude: 39.4637, longitude: -8.19905 },
            { latitude: 39.46354, longitude: -8.19898 },
            { latitude: 39.46346, longitude: -8.19897 },
            { latitude: 39.46328, longitude: -8.19864 },
            { latitude: 39.46312, longitude: -8.19834 },
            { latitude: 39.46303, longitude: -8.19814 },
            { latitude: 39.46291, longitude: -8.19789 },
            { latitude: 39.46277, longitude: -8.1981 },
            { latitude: 39.46259, longitude: -8.19838 },
            { latitude: 39.46255, longitude: -8.19844 },
            { latitude: 39.46232, longitude: -8.19869 },
            { latitude: 39.46228, longitude: -8.19873 },
            { latitude: 39.46224, longitude: -8.19872 },
            { latitude: 39.46217, longitude: -8.19885 },
            { latitude: 39.46204, longitude: -8.19916 },
            { latitude: 39.46184, longitude: -8.19965 },
            { latitude: 39.46167, longitude: -8.19957 },
            { latitude: 39.46145, longitude: -8.19951 },
            { latitude: 39.46123, longitude: -8.19943 },
            { latitude: 39.46129, longitude: -8.19913 },
            { latitude: 39.46134, longitude: -8.19883 },
            { latitude: 39.46132, longitude: -8.19875 },
            { latitude: 39.4613, longitude: -8.19866 }
            ]} 
            strokeWidth={10} 
            strokeColor="rgba(46, 139, 87, 0.5)" 
            />
            <Polyline coordinates={[
			{ latitude: 39.4631, longitude: -8.19829 },
            { latitude: 39.46319, longitude: -8.1981 },
            { latitude: 39.46319, longitude: -8.19806 },
            { latitude: 39.46317, longitude: -8.19803 },
            { latitude: 39.46314, longitude: -8.198 },
            ]} 
            strokeWidth={10} 
            strokeColor="rgba(46, 139, 87, 0.5)" 
            />
            <Polyline coordinates={[
			{ latitude: 39.46512, longitude: -8.19781 },
			{ latitude: 39.46485, longitude: -8.19763 },
            { latitude: 39.46453, longitude: -8.19742 },
            { latitude: 39.46435, longitude: -8.1973 },
			{ latitude: 39.4642, longitude: -8.19721 },
            { latitude: 39.46394, longitude: -8.19705 },
            { latitude: 39.46369, longitude: -8.19689 },
			{ latitude: 39.46346, longitude: -8.19675 },
            { latitude: 39.46311, longitude: -8.19658 },
            { latitude: 39.46282, longitude: -8.19643 },
			{ latitude: 39.4627, longitude: -8.19636 },
            { latitude: 39.46263, longitude: -8.19632 },
            { latitude: 39.46256, longitude: -8.19635 },
			{ latitude: 39.46232, longitude: -8.19627 },
            { latitude: 39.4621, longitude: -8.1962 },
            { latitude: 39.4619, longitude: -8.19658 },
			{ latitude: 39.46181, longitude: -8.19677 },
            { latitude: 39.46178, longitude: -8.19684 },
            { latitude: 39.46165, longitude: -8.19704 },
			{ latitude: 39.4615, longitude: -8.19722 },
            { latitude: 39.46144, longitude: -8.19731 },
            { latitude: 39.46151, longitude: -8.19746 },
			{ latitude: 39.46164, longitude: -8.19774 },
            { latitude: 39.46175, longitude: -8.19793 },
            { latitude: 39.46179, longitude: -8.19802 },
			{ latitude: 39.46156, longitude: -8.19823 },
            { latitude: 39.46128, longitude: -8.19849 },
            { latitude: 39.46123, longitude: -8.19856 }
            ]} 
            strokeWidth={10}  
            strokeColor="rgba(0, 0, 139, 0.5)"
            />
            <Polyline coordinates={[
            { latitude: 39.46256, longitude: -8.19635 },
            { latitude: 39.46256, longitude: -8.19634 },
			{ latitude: 39.462591, longitude: -8.196302 },
            { latitude: 39.46261, longitude: -8.19622 },
            { latitude: 39.46262, longitude: -8.19612 },
            { latitude: 39.4628, longitude: -8.19612 },
            ]} 
            strokeWidth={10} 
            strokeColor="rgba(0, 0, 139, 0.5)" 
            />
            <Polyline coordinates={[
			{ latitude: 39.46394, longitude: -8.20061 },
			{ latitude: 39.4644, longitude: -8.19948 },
            { latitude: 39.46443, longitude: -8.1994 },
            { latitude: 39.46445, longitude: -8.19929 },
            { latitude: 39.46444, longitude: -8.19923 },
            { latitude: 39.46441, longitude: -8.19913 },
            { latitude: 39.46434, longitude: -8.19899 },
            { latitude: 39.46424, longitude: -8.19878 },
            { latitude: 39.46416, longitude: -8.1986 },
            { latitude: 39.46407, longitude: -8.19835 },
            { latitude: 39.46405, longitude: -8.19828 },
            { latitude: 39.46406, longitude: -8.1981 },
            { latitude: 39.46408, longitude: -8.19798 },
            { latitude: 39.46412, longitude: -8.19789 },
            { latitude: 39.46427, longitude: -8.19763 },
            { latitude: 39.46441, longitude: -8.19733 }
            ]} 
            strokeWidth={10}  
            strokeColor="rgba(255, 174, 66, 0.5)"
            />
            </>
            )}
            </MapView  >
            {/* on screen buttons */}
            <TouchableOpacity style={styles.button}
                //onPress={() => console.log('Button pressed')}
                onPress={() => setPolylinesVisible(prevState => !prevState)}
                >
                <MapItinerary width="50" height="50" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
                <MapHistory width="50" height="50" onPress={handleHistoryPress}/>
            </TouchableOpacity>
        </View>
    );
}
 
