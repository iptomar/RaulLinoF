import * as React from 'react';
import { View, Text } from 'react-native';

export default function Bio({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Bio" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Bio Screen</Text>
        </View>
    );
}