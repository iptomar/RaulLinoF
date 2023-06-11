import React, { useState } from 'react';
import { Image, View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

//data from json
import dados from './itinerarios';

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
        color: 'black',
        marginBottom: 10,
    },
    content: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
    },
    content2: {
        width: '55%',
        flexDirection: 'column',
        justifyContent: 'center',
        // paddingHorizontal: 5,
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
        textAlign: 'left',
        fontFamily: 'FiraSans-Regular',
        color: '#272133',
    },  
    pickerContainer: {
        borderColor: '#078C6B',
        borderWidth: 1,
        borderRadius: 4,
        overflow: 'hidden',
        width: '100%'
      },
    picker: {
        color: '#272133',
        fontSize: 16,
        fontFamily: 'FiraSans-Regular',
    },
  });

export default function Home({navigation}) {
    const [orderBy, setOrderBy] = useState('default');

    const handleOrderByChange = (value) => {
        setOrderBy(value);
      };
    
    const getYearSubstring = (year) => {
        return year.substring(0, 4);
    };

    let filteredDados = dados;

    if (orderBy === 'yearAscending') {
        filteredDados = filteredDados.sort((a, b) => a.year.localeCompare(b.year));
    } else if (orderBy === 'yearDescending') {
        filteredDados = filteredDados.sort((a, b) => b.year.localeCompare(a.year));
    }
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.title} selectable={true}>O INÍCIO</Text>
                    <View style={styles.pickerContainer}>
                        {/* filter to order by year */}
                        <Picker
                            style={styles.picker}
                            selectedValue={orderBy}
                            onValueChange={handleOrderByChange}
                        >
                            <Picker.Item label="Ordenar por" value="default" />
                            <Picker.Item label="Ano - Ascendente" value="yearAscending" />
                            <Picker.Item label="Ano - Decrescente" value="yearDescending" />
                        </Picker>
                    </View>
                </View>              
                {/* loop to see each item on Home */}
                {dados.map((item) => {
                return(
                    <View style={styles.content} key={item.id}>
                        <Image style={styles.image} source={item.imgs[0]} /> 
                        <View style={styles.content2}>
                            <Text style={styles.description} selectable={true}>{getYearSubstring(item.year)} {'\n'}{item.title}{'\n'}{item.typology}</Text>
                            {/* button to see details */}
                            <Button style={styles.image}
                                title='Detalhes'
                                color={'#078C6B'}
                                onPress={() => navigation.navigate('Detalhes', {itemID: item.id})}
                            />
                        </View>
                    </View> 
                );
                })}  
            </ScrollView>
        </View>
    );
}





