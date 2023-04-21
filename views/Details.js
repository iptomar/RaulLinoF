import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image } from 'react-native';

//json data
import dados from './itinerarios';

//css
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Unbounded-Regular',
        color: 'black',
        padding: 20,
    },
    subtitle: {
        fontSize: 15,
        fontFamily: 'Unbounded-Regular',
        color: 'black',
        padding: 5,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginBottom: 20,
        marginRight: 20,
    },
    description: {
        fontSize: 16,
        fontFamily: 'FiraSans-Regular',
        color: '#272133',
        padding: 5,
    }
  });

export default function Details({ navigation, route }) {
    const {itemID} = route.params;

    return (
        <ScrollView >
        {dados.map((item) => {
            if(item.id === itemID){
                return(
                    <View>
                        <Text style={styles.title}>{item.title}</Text>
                        {item.imgs.map((img)=>{
                            return(
                                <View>
                                    <Image style={styles.image} source={img} /> 
                                </View>
                            );
                        })}
                        <Text style={styles.subtitle}>
                            Ano: {item.year}{'\n'}
                            Topologia: {item.typology}{'\n'}
                            Endereço: {item.address}{'\n'}
                            Coordenadas: {item.coords}{'\n'}
                            Descrição:</Text>
                        <Text style={styles.description}>{item.info}</Text>
                    </View>
                );
            }
            })} 
            <Button title='Go Back' onPress={()=> navigation.navigate('Raul Lino')} />
        </ScrollView>
      );
  
}