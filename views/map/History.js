import * as React from 'react';
import { View, Text, Button, TouchableOpacity, ScrollView, Image } from 'react-native';
import itinerarios from '../itinerarios';
import MapHistory from '../../data/img/views/adicionar.svg';
import MapHistClose from '../../data/img/views/fechar.svg';


const styles = {
    content: {
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    content2: {
        backgroundColor: '#EAD8C1',
        justifyContent: 'space-between',
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
        maxWidth: '90%',
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
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginBottom: 20,
        marginRight: 20,
    },
    closeButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAD8C1',
    },
}

export default function History({ navigation, route}) {
    const {selectedMarkersList} = route.params;
    const [selectedItem, setSelectedItem] = React.useState(null);
    //verify each places to show
    const filteredItinerarios = itinerarios.filter(item =>
        selectedMarkersList.includes(item.id)
    );

    //open details
    const showDetails = (item) => {
        setSelectedItem(item);
      };

    //close details
    const closeDetails = () => {
        setSelectedItem(null);
    };

    return (
        <ScrollView style={styles.content}>
            <Text style={styles.title}>MAPA INTERATIVO - HISTÓRIA</Text>

                {/* show selected places */}
                {filteredItinerarios.map(item => (
                    <View key={item.id} style={styles.content}>
                        <View style={styles.listPlaces}>
                            <Text style={styles.subtitle}>{item.year} - <Text style={styles.subtitle}>{item.title}</Text></Text>
                            {/* open details */}
                            <TouchableOpacity>
                                <MapHistory width="50" height="50" onPress={() => showDetails(item)}/>
                            </TouchableOpacity>
                        </View>
                        {/* details */}
                        {selectedItem && item.id == selectedItem.id && (
                            <View style={styles.content}>
                            <Text style={styles.subtitle2}>{selectedItem.title}</Text>
                            <View style={styles.closeButton}>
                                <Image style={styles.image} source={item.imgs[0]} /> 
                            </View>
                                <View style={styles.content2}>
                                    <Text style={styles.description}>{selectedItem.info}</Text>
                                    <TouchableOpacity style={styles.closeButton}>
                                        <MapHistClose  width="50" height="50" onPress={() => closeDetails()}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </View>
                ))}
            <Button title='Voltar' onPress={()=> navigation.navigate('Map')} color={'#078C6B'}/>
        </ScrollView>
    );
}