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
  
    return R * 2 * Math.asin(Math.sqrt(a)); // Distance in km
  }



  export default function Map({ navigation }) {
    const [distance, setDistance] = React.useState(null);
    const [markers, setMarkers] = React.useState([
        {
            title: "Marker Vermelho",
            description: "Marker Vermelho",
            coordinate: {
                latitude: 39.461152, 
                longitude: -8.189
            },
            pinColor: "red"
        },
        {
            title: "Marker Azul",
            description: "Marker Azul",
            coordinate: {
                latitude: 39.4705,
                longitude: -8.2099
            },
            pinColor: "blue"
        }
    ]);

    React.useEffect(() => {
        if (markers.length >= 2) {
            const lat1 = markers[0].coordinate.latitude;
            const long1 = markers[0].coordinate.longitude;
            const lat2 = markers[1].coordinate.latitude;
            const long2 = markers[1].coordinate.longitude;
            const distance = Math.sqrt((lat2 - lat1) ** 2 + (long2 - long1) ** 2);
            setDistance(distance);
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
                        title={marker.title}
                        description={marker.description}
                        pinColor={marker.pinColor}
                    />
                ))}
            </MapView>
            {distance !== null && (
                <View style={{position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'white', padding: 10}}>
                    <Text>Distance: {distance}</Text>
                </View>
            )}
        </View>
    );
}










//export default function Map({ navigation }) {
 //   return (
  //      <MapView
 //           style={{height:"100%"}}
  //          initialRegion={getInitialState()}>              
 ///           <Marker
   //             coordinate={{
 //                   latitude: 39.461152, 
 //                   longitude: -8.189
 //               }} 
  //              title="Marker Vermelho"
  //              description="Marker Vermelho"
  //              pinColor="Red"              
  //          />
 //           <Marker
  //           coordinate={{
  //                  latitude: 39.4705,
   //                 longitude: -8.2099
 //               }}
 //               title="Marker Azul"
 //               description="Marker Azul"
 //               pinColor="blue"
  //          />
 //       </MapView>
 //   );
//}