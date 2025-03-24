import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './srs/screens/HomePage';
import ScanScreen from './srs/screens/ScanScreen';
import ResultScreen from './srs/screens/ResultScreen';

const Stack = createStackNavigator();

const App = () => {
  const [scanHistory, setScanHistory] = useState([]); // Store scanned images

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomePage">
          {(props) => <HomePage {...props} scanHistory={scanHistory} />}
        </Stack.Screen>
        <Stack.Screen name="ScanScreen">
          {(props) => <ScanScreen {...props} setScanHistory={setScanHistory} />}
        </Stack.Screen>
        <Stack.Screen name="ResultScreen">
          {(props) => <ResultScreen {...props} setScanHistory={setScanHistory} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
