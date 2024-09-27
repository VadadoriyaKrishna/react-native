import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';


const SplashScreen = ({ navigation } :any ) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000); // 3 seconds delay for splash screen
  }, [navigation]);
  

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to MyApp</Text>
      <ActivityIndicator size="large" color="black" style={styles.spinner} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color:'black',
  },
  spinner: {
    marginTop: 20,
  },
});

export default SplashScreen;
