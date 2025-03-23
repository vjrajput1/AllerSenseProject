import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScanScreen from './srs/screens/ScanScreen';
import ResultScreen from './srs/screens/ResultScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScanScreen" component={ScanScreen} options={{ title: 'Scan' }} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} options={{ title: 'Result' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
