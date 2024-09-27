import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library

const Sidebar = ({ navigation }) => {
  // Function to handle sharing the app (requires additional setup for actual sharing)
  const shareApp = () => {
    // You can use a package like react-native-share or Linking to direct to an app store
    alert("Share feature coming soon!");
  };

  // Function to handle rating the app
  const rateApp = () => {
    // You can use Linking to open your app's store link for rating
    // const storeUrl = 'https://play.google.com/store/apps/details?id=com.example.app'; // Replace with your app's store URL
    // Linking.openURL(storeUrl).catch(err => console.error("Couldn't load page", err));
    alert("Share feature coming soon!");
  };

  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.appName}>Designs</Text>
      <Text style={styles.menuTitle}>Menu</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <View style={styles.row}>
      <Image source={require('../assets/icons/home.png')} style={styles.icon} />
      {/* <MaterialIcon name="home" size={20} color="black" /> */}
        <Text style={styles.menuItem}>Home</Text>
      </View>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text style={styles.menuItem}>Detail</Text>
      </TouchableOpacity> */}

      <TouchableOpacity onPress={shareApp}>
        <View style={styles.row}>
        <Image source={require('../assets/icons/share.png')} style={styles.icon} />
        <Text style={styles.menuItem}>Share this app</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={rateApp}>
      <View style={styles.row}>
      <Image source={require('../assets/icons/star.png')} style={styles.icon} />
        <Text style={styles.menuItem}>Rate this app</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('About')}>
      <View style={styles.row}>
      <Image source={require('../assets/icons/information-button.png')} style={styles.icon} />
        <Text style={styles.menuItem}>About us</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Disclaimer')}>
      <View style={styles.row}>
      <Image source={require('../assets/icons/risk.png')} style={styles.icon} />
        <Text style={styles.menuItem}>Disclaimer</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
      <View style={styles.row}>
      <Image source={require('../assets/icons/insurance.png')} style={styles.icon} />
        <Text style={styles.menuItem}>Privacy Policy</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header:{
    
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  row: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center vertically
    padding:10,
  },
  menuItem: {
    fontSize: 18,
    marginLeft: 10, 
    color: 'black',
  },
  icon: {
    width: 30,  // Adjust width as needed
    height: 30, // Adjust height as needed
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  appName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color:'black',
  },
});

export default Sidebar;
