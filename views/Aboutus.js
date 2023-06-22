import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image } from 'react-native';

//css
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontFamily: 'Unbounded-Regular',
        color: 'black',
        padding: 20,
    },
    subtitle: {
        fontSize: 15,
        fontFamily: 'Unbounded-Regular',
        color: 'black',
        padding: 5,
    },
    
    description: {
        fontSize: 16,
        fontFamily: 'FiraSans-Regular',
        color: '#272133',
        padding: 5,
    }
  });

export default function Aboutus({ navigation, route }) {
    //const {itemID} = route.params;

    return (
                <View >
                        <Text style={styles.title} >Sobre nós</Text>                       
                        <Text style={styles.description}>Esta aplicação foi desenvolvida no âmbito do projeto final da cadeira de Gestão de Projetos, com o docente Paulo Santos.</Text>
                        <Text style={styles.subtitle}>
                            Alunos:
                        </Text>
                        <Text style={styles.subtitle}>   
                            Rui Marques Nº20230
                        </Text>
                        <Text style={styles.subtitle}>
                            João Ferreira Nº19149
                        </Text>
                        <Text style={styles.subtitle}>
                            Ana Graça Nº21370 
                        </Text>
                        <Text style={styles.subtitle}>
                            Rúben Poupado Nº20966
                        </Text>
                        <Text style={styles.subtitle}>
                            Rodrigo Maia Nº21897
                        </Text>
                        <Text style={styles.subtitle}>
                            Guilherme Lourenço Nº21897
                        </Text>
                        <Button title='Voltar' onPress={()=> navigation.navigate('Locais')} color={'#078C6B'}/>
                </View>
                    
    );

}