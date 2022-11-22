import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';
import WriterScreen from './src/screens/WriterScreen';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="WriterScreen" component={WriterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
