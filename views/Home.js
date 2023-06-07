import React, { useState } from 'react';
import { Image, View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

//data from json
import dados from './itinerarios';
//css styles
import {container, header, title, contentGeral, contentDetail, image, description, pickerContainer, picker} from '../styles';

export default function Home({navigation}) {
    const [orderBy, setOrderBy] = useState('default');

    // Filter to order the places by year
    const handleOrderByChange = (value) => {
        setOrderBy(value);
      };
    
    // If the year of building has 2 DatePickerIOS, the first date is beign considered
    const getYearSubstring = (year) => {
        return year.substring(0, 4);
    };

    let filteredDados = dados;

    // order by year - ascending or descending
    if (orderBy === 'yearAscending') {
        filteredDados = filteredDados.sort((a, b) => a.year.localeCompare(b.year));
    } else if (orderBy === 'yearDescending') {
        filteredDados = filteredDados.sort((a, b) => b.year.localeCompare(a.year));
    }
    
    return (
        <View style={container}>
            <ScrollView>
                <View style={header}>
                    <Text style={title} selectable={true}>O INÍCIO</Text>
                    <View style={pickerContainer}>
                        {/* filter to order by year */}
                        <Picker
                            style={picker}
                            selectedValue={orderBy}
                            onValueChange={handleOrderByChange}
                        >
                            {/* Names of the Picker that appear on the App */}
                            <Picker.Item label="Ordenar por" value="default" />
                            <Picker.Item label="Ano - Ascendente" value="yearAscending" />
                            <Picker.Item label="Ano - Decrescente" value="yearDescending" />
                        </Picker>
                    </View>
                </View>              
                {/* loop to see each item on Home */}
                {dados.map((item) => {
                return(
                    <View style={contentGeral} key={item.id}>
                        {/* Image and data about the place (resumed) */}
                        <Image style={image} source={item.imgs[0]} /> 
                        <View style={contentDetail}>
                            <Text style={description} selectable={true}>{getYearSubstring(item.year)} {'\n'}{item.title}{'\n'}{item.typology}</Text>
                            {/* button to see the details page of the place selected */}
                            <Button style={image}
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





