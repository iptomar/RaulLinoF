import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import NavBar from './views/NavBar';
import SplashScreen from './SplashScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the splash screen for a few seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <SplashScreen /> : <NavBar />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;