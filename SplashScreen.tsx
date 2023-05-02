import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

//styling 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: '100%',
    height: '100%',
  }
});

//component
const SplashScreen = () => {
  return(
    <View style={styles.container}>
      {/* logo image on start */}
      <Image source={require('./data/img/app/startupLoad.png')} style={styles.logo}/>  
    </View>
  );
};

export default SplashScreen;