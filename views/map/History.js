import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import itinerarios from '../itinerarios';
import MapHistory from '../../data/img/views/adicionar.svg';


const styles = {
    content: {
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    listPlaces:{
        flexDirection:'row',
        backgroundColor: '#272133',
        justifyContent: 'space-between',
    },
    exapndBtn: {
        backgroundColor: '#ead8c1',
        alignSelf: 'flex-end',
    },
    title: {
        fontSize: 18,
        fontFamily: 'Unbounded-Regular',
        color: 'black',
        padding: 20,
    },
    subtitle: {
        fontSize: 15,
        fontFamily: 'Unbounded-Regular',
        color: '#fff',
        padding: 5,
    },
    subtitle2: {
        fontSize: 15,
        fontFamily: 'Unbounded-Regular',
        color: '#000',
        padding: 5,
        backgroundColor: "#EAD8C1",
    },
    description: {
        fontSize: 16,
        fontFamily: 'FiraSans-Regular',
        color: '#000',
        padding: 5,
        backgroundColor: '#EAD8C1',
    }
}

export default function History({ navigation, route}) {
    const {selectedMarkersList} = route.params;
    const [selectedItem, setSelectedItem] = React.useState(null);
    //verify each places to show
    const filteredItinerarios = itinerarios.filter(item =>
        selectedMarkersList.includes(item.id)
    );

    const showDetails = (item) => {
        setSelectedItem(item);
      };

    return (
        <View style={styles.content}>
            <Text style={styles.title}>MAPA INTERATIVO - HISTÓRIA</Text>

                {filteredItinerarios.map(item => (
                    <View key={item.id} style={styles.listPlaces}>
                        <Text style={styles.subtitle}>{item.year} - <Text style={styles.subtitle}>{item.title}</Text></Text>
                        <TouchableOpacity>
                            <MapHistory width="50" height="50" onPress={() => showDetails(item)}/>
                        </TouchableOpacity>
                    </View>
                ))}
            {selectedItem && (
                <View style={styles.content}>
                    <Text style={styles.subtitle2}>{selectedItem.title}</Text>
                    <Text style={styles.description}>{selectedItem.info}</Text>
                </View>
            )}
            <Button title='Voltar' onPress={()=> navigation.navigate('Map')} color={'#078C6B'}/>
        </View>
    );
}