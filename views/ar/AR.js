import * as React from 'react';
import { View, Text } from 'react-native';
import Localizacao from '../../componentes/gps';


export default function AR({ navigation }) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color:"red"}}>AR</Text>   
        <Localizacao  />  
    </View  >
    
    
    
    );
}