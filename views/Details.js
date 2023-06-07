import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image } from 'react-native';
//json data
import dados from './itinerarios';
//styling
import { containerDetails, title, image, contentImage, description, smallerSubTitle } from '../styles';

// Details of the place selected on the Home page
export default function Details({ navigation, route }) {
    const {itemID} = route.params;

    return (
        <ScrollView >
        {/* Loop to see only the place that was selected on the Home page */}
        {dados.map((item) => {
            if(item.id === itemID){
                return(
                    <View >
                        <Text style={title} selectable={true}>{item.title}</Text>
                        <View style={containerDetails}>
                            {/* Loop to see all the images of the place */}
                            {item.imgs.map((img, index)=>{
                                return(
                                    <View style={contentImage} key={index}>
                                        <Image style={image} source={img} /> 
                                    </View>
                                );
                            })}
                        </View>
                        {/* Data about the place */}
                        <Text style={smallerSubTitle} selectable={true}>
                            Ano: {item.year}{'\n'}
                            Topologia: {item.typology}{'\n'}
                            Endereço: {item.address}{'\n'}
                            Coordenadas: {item.coords}{'\n'}
                            Descrição:</Text>
                        {/* Long description of the place */}
                        <Text style={description}>{item.info}</Text>
                    </View>
                    
                );
            }
            })} 
            {/* Button to return to the home page */}
            <Button title='Voltar' onPress={()=> navigation.navigate('Locais')} color={'#078C6B'}/>
        </ScrollView>
      );
  
}