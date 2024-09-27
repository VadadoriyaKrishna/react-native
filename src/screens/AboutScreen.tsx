// AboutScreen.js
import React,{useCallback} from 'react';
import { View, Text ,StyleSheet , ScrollView , BackHandler} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';




const AboutScreen = ({ navigation }) => {


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
    
    <View>
     <ScrollView contentContainerStyle={styles.container}>
    
      <Text style={styles.content}>
      At [App Name], our mission is to [describe your mission or goal in a few words, e.g., "make your life easier with innovative solutions"]. We are a passionate team dedicated to delivering high-quality [mention the type of app or service, e.g., "productivity tools," "entertainment experiences," etc.].</Text>

{/* Our journey began with a vision to [briefly explain the origin or inspiration behind the app, e.g., "create an intuitive and user-friendly platform that simplifies your daily tasks"]. We believe in [mention core values or principles, e.g., "innovation," "customer satisfaction," "sustainability"], and we strive to bring these values into every aspect of our work.


Stay tuned for more updates and exciting features! */}
        <Text style={styles.content}>
        Thank you for choosing [App Name]. We hope you enjoy using our app and find it [mention the intended benefit or experience, e.g., "as useful and enjoyable as we intended it to be"]. If you have any questions or feedback, please don’t hesitate to reach out to us at [contact information].

      </Text>

     </ScrollView>
    </View>
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
      color:'black',
    },
    content: {
      fontSize: 16,
      marginBottom: 15,
      lineHeight: 24,
      color: '#333333',
    },
})

export default AboutScreen;
