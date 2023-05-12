import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function History({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "History" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>History Screen</Text>
            <Button title='Voltar' onPress={()=> navigation.navigate('Map')} color={'#078C6B'}/>
        </View>
    );
}