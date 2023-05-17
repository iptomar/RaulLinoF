import * as React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, ScrollView } from 'react-native';

import DetailsIcon from '../../data/img/views/ar/detailsIcon.svg';
import VideoIcon from '../../data/img/views/ar/videoIcon.svg';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingTop: 20,
        borderBottomColor: '#FFD683',
        borderBottomWidth: 5,
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'Unbounded-Regular',
        color: 'black'
    },
    description: {
        maxWidth: '100%',
        fontSize: 16,
        textAlign: 'left',
        fontFamily: 'FiraSans-Regular',
        color: '#272133',
    },
    image: {
        width: '80%',
        height: '100%',
        marginBottom: 5,
    },
    teste:{
        flexDirection: 'row',
        height : '50%',
        width: '100%'
    },
    button: {
        position: 'absolute',
        top: 20,
        right: 0,
        backgroundColor: '#636363',
        padding: 10,
        borderRadius: 5,
    }, 
    button2:{
        position: 'absolute',
        top: 80,
        right: 0,
        backgroundColor: '#636363',
        padding: 10,
        borderRadius: 5,
    },
    buttonContainer:{
        marginTop:'15%',
        width:'20%',
        height: '50%',
    },
})

export default function AR({ navigation }) {
    return (
            <View style={style.container}>
                <Text style= {style.header}>
                    Realidade Aumentada
                </Text>
                <Text style= {style.subtitle}>
                    Assembleia de Abrantes 
                </Text>
                <View style ={style.teste}>
                    <Image 
                        style ={style.image}
                        source={require("../../data/img/views/ar/abrantes.jpg")}/>
                </View>

                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('ARDetails')}>
                    <DetailsIcon width="50" height="50" />
                </TouchableOpacity>
                <TouchableOpacity style={style.button2} onPress={() => console.log('Video pressed')}>
                    <VideoIcon width="50" height="50" />
                </TouchableOpacity>
                <ScrollView>
                    <Text style={style.description}>
                        A fun­dação de Abrantes ter-se-á ve­ri­fi­cado em me­ados do sé­culo XII, re­sul­tado da ne­ces­si­dade de de­fesa dos ter­ri­tó­rios con­quis­tados e de as­se­gurar a vida ativa de San­tarém. Para me­lhor as­se­gurar essa de­fesa, D. Afonso Hen­ri­ques doou o seu Cas­telo e ex­tenso termo à Ordem de S. Tiago da Es­pada em 1173 e seis anos de­pois con­cede-lhe foral (1179). As­so­ciada à origem do nome Abrantes existe uma lenda en­can­tada.
                        {"\n"}{"\n"}
                        O perfil de Abrantes é no sé­culo XII, ine­qui­vo­ca­mente mi­litar, con­di­ci­o­nando a im­plan­tação da es­tru­tura amu­ra­lhada e Cas­telo, num local di­fi­cil­mente ex­pug­nável e usando o leito do rio Tejo como obs­tá­culo na­tural.
                    </Text>
                </ScrollView>
            </View>  
    );
}