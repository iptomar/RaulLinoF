import * as React from 'react';
import { View, Text, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width:'100%', height:'100%', }}>
            <ImageBackground 
             style={{height:'100%', width:'100%'}}
             resizeMode='cover'
             source={require('../data/img/views/home/abrantes2.png')}>
                <Text style = {{fontSize: 26, fontFamily: "Fira Sans", }}>
                    Teste
                </Text>
            </ImageBackground>
        </View>
        
    );
}