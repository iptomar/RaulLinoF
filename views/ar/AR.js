import * as React from 'react';
import { View, Text } from 'react-native';

export default function AR({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "AR" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>AR Screen</Text>
        </View>
    );
}