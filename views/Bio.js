import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
// Raul Lino image
import RaulLinoImage from '../data/img/views/biografia/raul_lino_green.jpg';
//styling
import { container, header, subTitle, contentRaul, aboutRaul, image, descriptionRaul } from '../styles';

// Bipgraphy of Raul Lino - static data
export default function Bio({ navigation }) {
    return (
        <View style={container}>
            <ScrollView>
                <View style={header}>
                    {/* Header */}
                    <Text style={subTitle} selectable={true}>NOTA BIOGRÁFICA</Text>
                </View>
                <View style={contentRaul}>
                    {/* Image of Raul Lino */}
                    <Image source={RaulLinoImage} style={image} />
                    {/* Data of Raul Lino */}
                    <Text style={descriptionRaul} selectable={true}>Nome completo: Raul Lino da Silva{'\n'}Data de Nascimento: 21 de Novembro de 1879, Lisboa {'\n'}Data de Óbito: 13 de Julho de 1974 (94 anos), Lisboa</Text>
                </View>
                {/* Description of Raul Lino */}
                <Text style={aboutRaul} selectable={true}>Foi uma personalidade única no que se refere ao panorama das artes em Portugal, muito devido ao facto de ter conseguido articular a tradição portuguesa com as inovadoras correntes europeias do início do século XX. Com 70 anos de atividade profisisonal, Lino é autor de mais de 700 obras. Também é importante referir que apesar do seu leque de projetos, também foi um homem de vasta obra teórica  e escrita, o que se tornou muito determinante para os seus seguidores ao longo dos anos em Portugal.</Text>
            </ScrollView>
        </View>
      );
  
}