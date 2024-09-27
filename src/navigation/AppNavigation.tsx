import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity } from 'react-native';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import DisclaimerScreen from '../screens/DisclaimerScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import CategoryScreen from '../screens/CategoryScreen';
import ImageDetailScreen from '../screens/ImageDetailScreen';
import Sidebar from '../components/Sidebar';
import { useNavigation } from '@react-navigation/native';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
// Function to render the custom back button
const CustomBackButton = ({name}:any)  => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(name)} style={{ marginLeft: 15 }}>
      <Image source={require('../assets/backbtn.png')} style={{ width: 24, height: 24 }} />
    </TouchableOpacity>
  );
};



const AppNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={(props :any ) => <Sidebar {...props} />}>
      <Drawer.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Home" component={HomeScreen} options={{ headerTitle: 'Rangoli Designs' }}/>
      <Drawer.Screen name="Category" component={CategoryScreen}
       options={{
        headerTitle: 'View Category Wise Image',
        headerLeft: () => <CustomBackButton name="Home"/>, // Set custom back button here
      }}/> 
      <Drawer.Screen name="ImageView" component={ImageDetailScreen}  
          options={{
          headerTitle: 'View Image',
          headerLeft: () => <CustomBackButton name="Category" />, // Set custom back button here
        }}/>

      {/* <Drawer.Screen name="ImageView" component={ImageViewScreen} options={{ headerTitle: 'View Image' }} /> */}
      {/* <Drawer.Screen name="Detail" component={ImageViewScreen} /> */}
      <Drawer.Screen name="About" component={AboutScreen} />
<Drawer.Screen name="Disclaimer" component={DisclaimerScreen} />
<Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />

    </Drawer.Navigator>
  );
};


export default AppNavigation;

// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import DrawerNavigator from '../screens/DrawerNavigator'; // Import your drawer navigator

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Drawer" component={DrawerNavigator} />
//     </Stack.Navigator>
//   );
// };

// export default AppNavigator;
