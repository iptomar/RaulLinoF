import React from 'react';
import { Image, View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

//data from json
const dados = require('../data/json/itinerarios.json');
import Test from '../data/img/itinerario/2/it_021.jpg';
const Stack = createNativeStackNavigator();

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
    const navigation = useNavigation();

    function navigateToDetails(id) {
        navigation.navigate('Details', { itemId: id });
    }
    
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
}


function Inicio(){
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
                {dados.dados.map((item) => {
                return(
                    <TouchableOpacity style={styles.content}>
                        <Image style={styles.image} source={item.imgs[0]} onPress={() => navigateToDetails(item.id)}/>
                        <Text style={styles.description}>{item.year}{'\n'}{item.title}{'\n'}{item.address}
                        {'\n'}{item.imgs[0]}</Text>
                    </TouchableOpacity>
                );
                })}  
            </ScrollView>
        </View>
    );

}

function Details({ route }) {
    const { itemId } = route.params;
    const item = dados.dados.find((item) => item.id === itemId);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Feed Screen</Text>
        <Button title="Go to Root" onPress={() => navigation.navigate('Home')} />
        <Button
          title="Go to Root, Profile"
          onPress={() => navigation.navigate('Home', { screen: 'Profile' })}
        />
      </View>
    );
  }



