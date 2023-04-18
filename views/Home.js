import * as React from 'react';
import { Image, View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';

const dados = require('../data/json/itinerarios.json');
// import Dados from '../data/json/itinerarios_test';
import Test from '../data/img/itinerario/2/it_021.jpg';
const Test2 = dados.dados[0].imgs[0];

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
        maxWidth: '100%',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-around',
        paddingHorizontal: 15,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginBottom: 20,
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
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                <Text style={styles.title}>O INÍCIO</Text>
                </View>              
                <FlatList 
                    data={dados.dados}
                    renderItem={({ item }) => (
                    <View style={styles.content}>
                        <Image style={styles.image} source={Test}/>
                        <Text style={styles.description}>{item.year}{'\n'}{item.title}{'\n'}{item.address}
                        {'\n'}{item.imgs[0]}</Text>
                    </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    />
            </ScrollView>
        </View>
    );
}
