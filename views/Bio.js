import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

// Raul Lino image
import RaulLinoImage from '../data/img/views/biografia/raul_lino.jpg';

//screen size 
const { widthS, heightS } = Dimensions.get('window');

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
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
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
    },
    about: {
        maxWidth: '100%',
        paddingHorizontal: 15,
        fontSize: 16,
    }
  });

export default function Bio({ navigation }) {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>RaulLino</Text>
            <Text style={styles.subtitle}>Nota Biográfica</Text>
          </View>
          <View style={styles.content}>
            <Image source={RaulLinoImage} style={styles.image} />
            <Text style={styles.description}>Nome completo: Raul Lino da Silva{'\n'}Data de Nascimento: 21 de Novembro de 1879, Lisboa {'\n'}Data de Óbito: 13 de Julho de 1974 (94 anos), Lisboa</Text>
          </View>
          <Text style={styles.about}>Foi uma personalidade única no que se refere ao panorama das artes em Portugal, muito devido ao facto de ter conseguido articular a tradição portuguesa com as inovadoras correntes europeias do início do século XX. Com 70 anos de atividade profisisonal, Lino é autor de mais de 700 obras. Também é importante referir que apesar do seu leque de projetos, também foi um homem de vasta obra teórica  e escrita, o que se tornou muito determinante para os seus seguidores ao longo dos anos em Portugal.</Text>
        </View>
      );
  
}