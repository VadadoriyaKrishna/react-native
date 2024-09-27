import React,{useCallback} from 'react';
import { View, Text, StyleSheet, ScrollView ,BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const PrivacyPolicyScreen = ({navigation}) => {

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
      <Text style={styles.title}>Privacy Policy</Text>
      <Text style={styles.content}>
        At Rangoli Designs, we respect your privacy and are committed to protecting your personal information. 
        This Privacy Policy explains how we collect, use, and disclose your information when you use our app. 
        By using the Rangoli Designs app, you agree to the collection and use of information in accordance with this policy.
      </Text>

      <Text style={styles.subtitle}>1. Information Collection</Text>
      <Text style={styles.content}>
        We may collect certain personally identifiable information, such as your name, email address, or phone number, 
        when you interact with the app. We may also collect non-personal information such as your device type, 
        operating system, and app usage data.
      </Text>

      <Text style={styles.subtitle}>2. Use of Information</Text>
      <Text style={styles.content}>
        The information we collect is used to improve the functionality of the app, enhance user experience, and provide 
        customer support. We do not sell or share your personal information with third parties except as necessary 
        for the operation of the app or as required by law.
      </Text>

      <Text style={styles.subtitle}>3. Data Security</Text>
      <Text style={styles.content}>
        We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. 
        However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we 
        cannot guarantee absolute security.
      </Text>

      <Text style={styles.subtitle}>4. Changes to This Privacy Policy</Text>
      <Text style={styles.content}>
        We may update our Privacy Policy from time to time. You are advised to review this page periodically for any 
        changes. Changes to this Privacy Policy are effective when they are posted on this page.
      </Text>

      <Text style={styles.subtitle}>5. Contact Us</Text>
      <Text style={styles.content}>
        If you have any questions about this Privacy Policy, please contact us at: support@rangolidesignsapp.com
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
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
    color: '#333333',
  },
});

export default PrivacyPolicyScreen;
