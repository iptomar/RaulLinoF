import * as React from 'react';
import { Image, View, Text, ScrollView, StyleSheet, Button } from 'react-native';

//data from json
import dados from './itinerarios';

//css
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
        // paddingHorizontal: 5,
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

export default function Home({navigation}) {
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.title} selectable={true}>O INÍCIO</Text>
                </View>              
                {/* loop to see each item on Home */}
                {dados.map((item) => {
                return(
                    <View style={styles.content}>
                        <Image style={styles.image} source={item.imgs[0]} /> 
                            {/* each child should have unique "key" prop to give stable identity to React element */}
                            <View style={styles.content2}>
                            <Text style={styles.description} selectable={true} key={item.id}>{item.year}{'\n'}{item.title}{'\n'}{item.typology}</Text>
                            <Button style={styles.image}
                                title='Detalhes'
                                color={'#078C6B'}
                                onPress={() => navigation.navigate('Detalhes', {itemID: item.id})}
                            />
                        </View>
                    </View> 
                );
                })}  
            </ScrollView>
        </View>
    );
}




