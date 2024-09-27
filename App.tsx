import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './src/navigation/AppNavigation';
import 'react-native-gesture-handler'; // Needed if you use GestureHandler
import 'react-native-reanimated';


const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './src/navigation/AppNavigation'; // Import your main navigator

// const App = () => {
//   return (
//     <NavigationContainer>
//       <AppNavigator />
//     </NavigationContainer>
//   );
// };

// export default App;

