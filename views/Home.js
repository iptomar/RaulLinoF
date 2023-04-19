import React from 'react';
import { Image, View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//data from json
import dados from '../data/json/itinerarios.json';
import dados2 from './itinerarios';
import { project } from '../react-native.config';

//css
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Unbounded-Regular',
        color: 'black'
    },
    content: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginBottom: 20,
        marginRight: 20,
    },
    description: {
        maxWidth: '60%',
        fontSize: 16,
        textAlign: 'left',
        fontFamily: 'FiraSans-Regular',
        color: '#272133',
    }
  });

export default function Home() {
    const navigation = useNavigation();

    function navigateToDetails(id) {
    navigation.navigate('Details', { itemId: id });
    }
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                <Text style={styles.title}>O INÍCIO</Text>
                </View>              
                {dados2.map((item) => {
                return(
                    <View style={styles.content}>
                        {/* <Image style={styles.image} source={require('../data/img/itinerario/1/it_011.jpg')} /> */}
                        <Image style={styles.image} source={item.imgs[0]} /> 
                        <Text style={styles.description}>{item.year}{'\n'}{item.title}{'\n'}{item.typology}</Text>
                    </View>
                );
                })}  
            </ScrollView>
        </View>
    );
}




