import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import ImageDetailScreen from '../screens/ImageDetailScreen';
import AboutScreen from '../screens/AboutScreen';
import DisclaimerScreen from '../screens/DisclaimerScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import Sidebar from '../components/Sidebar';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen name="Splash" component={SplashScreen} />
      <Drawer.Screen name="Home" component={HomeScreen} options={{ headerTitle: 'Rangoli Designs' }} />
      <Drawer.Screen
        name="Category"
        component={CategoryScreen}
        options={{ headerTitle: 'View Category Wise Image' }}
      />
      <Drawer.Screen
        name="ImageView"
        component={ImageDetailScreen}
        options={{ headerTitle: 'View Image' }}
      />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Disclaimer" component={DisclaimerScreen} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
