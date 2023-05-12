import * as React from 'react';
import { View, Text, Button } from 'react-native';
import itinerarios from '../Itinerarios';

export default function History({ navigation, route}) {
    const {selectedMarkersList} = route.params;
    //verify each places to show
    const filteredItinerarios = itinerarios.filter(item =>
        selectedMarkersList.includes(item.id)
    );

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "History" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>History Screen</Text>

                {filteredItinerarios.map(item => (
                    <Text key={item.id}>{item.title}</Text>
                ))}

            <Button title='Voltar' onPress={()=> navigation.navigate('Map')} color={'#078C6B'}/>
        </View>
    );
}