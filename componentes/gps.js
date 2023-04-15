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
                /// precisao do GPS com tru fica mais lento, caso ano queiramos  ser , tao preciso colocar false  
                enableHighAccuracy:true,
                timeout:120000,
                maximumAge:1000,        
            }

        )
    }

    
    return(
        <View>
           <Text>Localização</Text>     
           <TouchableHighlight
                onPress={obterLocal}
           >
                <Text>Localizar </Text>
            </TouchableHighlight> 
            <Text>Latitude:{lat} </Text>
            <Text>Longitude:{long} </Text>


        </View>
        
    );





}
