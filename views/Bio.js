import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';


// Raul Lino image
import RaulLinoImage from '../data/img/views/biografia/raul_lino_green.jpg';

//screen size 
//const { widthS, heightS } = Dimensions.get('window');

//Styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 20,
    },
    title: {
        fontSize: 32,
        marginBottom: 15,
        textAlign: 'center',
        fontFamily: 'Unbounded-Regular',
        color: 'black',
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'Unbounded-Regular',
        color: 'black'
    },
    content: {
        maxWidth: '100%',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-around',
        paddingHorizontal: 15,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginBottom: 20,
    },
    description: {
        maxWidth: '60%',
        fontSize: 16,
        textAlign: 'left',
        fontFamily: 'FiraSans-Regular',
        color: '#272133',
    },
    about: {
        maxWidth: '100%',
        paddingHorizontal: 15,
        fontSize: 16,
        fontFamily: 'FiraSans-Regular',
        color: '#272133',
    }
  });

export default function Bio({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    {/* <Text style={styles.title}>Raul Lino</Text> */}
                    <Text style={styles.subtitle}>NOTA BIOGRÁFICA</Text>
                </View>
                <View style={styles.content}>
                    <Image source={RaulLinoImage} style={styles.image} />
                    <Text style={styles.description}>Nome completo: Raul Lino da Silva{'\n'}Data de Nascimento: 21 de Novembro de 1879, Lisboa {'\n'}Data de Óbito: 13 de Julho de 1974 (94 anos), Lisboa</Text>
                </View>
                <Text style={styles.about}>Foi uma personalidade única no que se refere ao panorama das artes em Portugal, muito devido ao facto de ter conseguido articular a tradição portuguesa com as inovadoras correntes europeias do início do século XX. Com 70 anos de atividade profisisonal, Lino é autor de mais de 700 obras. Também é importante referir que apesar do seu leque de projetos, também foi um homem de vasta obra teórica  e escrita, o que se tornou muito determinante para os seus seguidores ao longo dos anos em Portugal.</Text>
            </ScrollView>
        </View>
      );
  
}