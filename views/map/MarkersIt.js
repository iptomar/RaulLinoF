import MapView, { Marker, Callout } from '@mvits/react-native-maps-osmdroid';
import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import itinerarios from '../itinerarios';
import MarkerIcon from '../../data/img/views/mapa/marker.svg';

//css
const styles = StyleSheet.create({
    bubble: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
    },
    bubble_text: {
        fontSize: 16,
        textAlign: 'left',
        fontFamily: 'FiraSans-Regular',
        color: '#272133',
    }
});

export default function MarkersIt(){
    return(
        <>
            {itinerarios.map((item) => {
                return(
                    <Marker
                        key={item.id}
                        coordinate={{latitude: item.coords[0], longitude: item.coords[1]}}
                        showCalloutPress
                        // anchor={{x: 0.5, y:0.5}}  
                        // onPress={() => navigation.navigate('Detalhes', {itemID: item.id})}  
                    >
                        <MarkerIcon width="50" height="50"/>
                        <Callout
                            style={styles.bubble}
                            tooltip={true}
                            title="Test"
                            description="test">
                            <Text>Something</Text>
                        </Callout>
                    </Marker>
                    
                );
            })}
        </>
    );


}