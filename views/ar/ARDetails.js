import * as React from 'react';
import { Image, View, Text, StyleSheet, ScrollView, Button } from 'react-native';

import DetailsArco from '../../data/img/views/ar/detailsArco.png';
import DetailsVertical from '../../data/img/views/ar/detailsVertical.png';
import DetailsJanela from '../../data/img/views/ar/detailsJanela.png';
import DetailsTelhado from '../../data/img/views/ar/detailsTelhado.png';
import DetailsHorizontal from '../../data/img/views/ar/detailsHorizontal.png';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Unbounded-Regular',
        color: 'black'
    },
    content: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
    },
    content2: {
        width: '60%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginBottom: 20,
        marginRight: 20,
    },
    description: {
        fontSize: 16,
        textAlign: 'left',
        fontFamily: 'FiraSans-Regular',
        color: '#272133',
    },
});

export default function ARDetails({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.content}>
                <Image style={styles.image} source={DetailsArco} />
                <View style={styles.content2}>
                    <Text style={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit dictum sem sed malesuada. 
                        Curabitur molestie nisl non urna euismod faucibus. Quisque rhoncus justo at est ullamcorper lacinia.
                    </Text>
                </View>
            </View> 
            <View style={styles.content}>
                <Image style={styles.image} source={DetailsVertical} />
                <View style={styles.content2}>
                    <Text style={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit dictum sem sed malesuada. 
                        Curabitur molestie nisl non urna euismod faucibus. Quisque rhoncus justo at est ullamcorper lacinia. 
                    </Text>
                </View>
            </View> 
            <View style={styles.content}>
                <Image style={styles.image} source={DetailsJanela} />
                <View style={styles.content2}>
                    <Text style={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit dictum sem sed malesuada. 
                        Curabitur molestie nisl non urna euismod faucibus. Quisque rhoncus justo at est ullamcorper lacinia.
                    </Text>
                </View>
            </View> 
            <View style={styles.content}>
                <Image style={styles.image} source={DetailsTelhado} />
                <View style={styles.content2}>
                    <Text style={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit dictum sem sed malesuada. 
                        Curabitur molestie nisl non urna euismod faucibus. Quisque rhoncus justo at est ullamcorper lacinia. 
                    </Text>
                </View>
            </View> 
            <View style={styles.content}>
                <Image style={styles.image} source={DetailsHorizontal} />
                <View style={styles.content2}>
                    <Text style={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit dictum sem sed malesuada. 
                        Curabitur molestie nisl non urna euismod faucibus. Quisque rhoncus justo at est ullamcorper lacinia.
                    </Text>
                </View>
            </View> 
            <Button title='Voltar' onPress={()=> navigation.navigate('AR')} color={'#078C6B'}/>
        </ScrollView>
    );
}