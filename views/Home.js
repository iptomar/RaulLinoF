import * as React from 'react';
import { View, Pressable, ImageBackground } from 'react-native';

export default function Home() {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground 
             style={{height:'100%', width:'100%'}}
             resizeMode='cover'
             source={require('../data/img/views/home/abrantes2.png')}>
                {/*
                <Pressable 
                    onPress= ""
                    title = "Explorar"
                    style = {{fontSize: 26, fontFamily: "Fira Sans", position: 'absolute', left: '40%', top:'50%', opacity: 100 }}>
                </Pressable>
                */}
            </ImageBackground>
    </View>
    );
}