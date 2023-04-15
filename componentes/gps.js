import  React, {useState} from 'react';
import { View, Text, TouchableHighlight, Alert } from 'react-native';
import Localizacao from '@react-native-community/geolocation';

export default function  (){

    const [lat,SetLatitude] = useState(0)
    const [long,SetLongitude] = useState(0)

    const obterLocal =()=>{
        Localizacao.getCurrentPosition(
            (pos)=>{
                SetLatitude(pos.coords.latitude)
                SetLongitude(pos.coords.longitude)
            },
            (erro)=>{
                Alert('ERRO' + erro.message)

            },
            {
                /// precisao do GPS com true fica mais lento, caso nao queiramos sertao precisos colocar false  
                enableHighAccuracy:true,
                timeout:120000,
                maximumAge:1000,        
            }
        )
    }    
    return(
        <View>
           <Text></Text>     
           <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={obterLocal}
           >
                <Text>Click para Obter a localizacao  Localizar </Text>
            </TouchableHighlight> 
            <Text>Latitude:{lat} </Text>
            <Text>Longitude:{long} </Text>
        </View>
        
    );





}
