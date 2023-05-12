import MapView, { Marker, Callout } from '@mvits/react-native-maps-osmdroid';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import itinerarios from '../Itinerarios';
import MarkerIcon from '../../data/img/views/mapa/marker.svg';
import MarkerIconYellow from '../../data/img/views/mapa/selectedMarker.svg';
import PlusBtn from '../../data/img/views/adicionarPreto.svg';
import MapHis from './History';

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
    const [selectedMarkersList, setSelectedMarkersList] = useState([]);

    //handle the Press on he Marker and save on the array wich items are selected
    const handleMarkerPress = (itemId) => {
        setMarkerStates((prevState) => {
            const updatedState = { ...prevState, [itemId]: !prevState[itemId] };
        
            if (updatedState[itemId]) {
                // If marker is selected, add from array selectedMarkersList
                setSelectedMarkersList((prevList) => [...prevList, itemId]);
            } else {
                // If marker is deselected, remove from array selectedMarkersList
                setSelectedMarkersList((prevList) =>
                prevList.filter((id) => id !== itemId)
                );
            }
            return updatedState;
        });
      };
      

    const handleAddPress = (itemID) => {
        console.log('AddPressed');
    }

    //navigation to history is the button of the history is pressed
    //it has to be false because everytime we click on the marker it render another true which causes it to navigate to the details page everytime we click on a marker
    useEffect(() => {
        if(!historyClicked) {
            console.log('Clicked!!', historyClicked)
            navigation.navigate('History', {selectedMarkersList: selectedMarkersList});
        }
    },[historyClicked,navigation]);

  
    return(
        <>
            {/* on screen buttons */}

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