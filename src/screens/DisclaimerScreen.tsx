import React,{useCallback} from 'react';
import { View, Text, StyleSheet, ScrollView, BackHandler} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const DisclaimerScreen = ({navigation}) => {

  const handleBackPress = useCallback(() => {
    navigation.navigate('Home'); // Navigate to Home when back button is pressed
    return true; // Prevent default back button behavior
  }, [navigation]);

  // Use useFocusEffect to add back handler when screen is focused
  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

      // Cleanup the event listener on unmount
      return () => backHandler.remove();
    }, [handleBackPress])
  );



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Disclaimer</Text>
      <Text style={styles.content}>
        The information provided by the Rangoli Designs app is for general informational purposes only. 
        All information is provided in good faith; however, we make no representation or warranty of any kind, 
        express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness 
        of any information on the app. 
      </Text>
      <Text style={styles.content}>
        Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a 
        result of the use of the app or reliance on any information provided on the app. Your use of the app and 
        your reliance on any information on the app is solely at your own risk.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
    color: '#333333',
  },
});

export default DisclaimerScreen;
