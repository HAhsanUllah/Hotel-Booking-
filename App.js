import * as React from 'react';
import { View, Text,StatusBar,ImageBackground,useEffect } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/loginScreen';
import SignupScreen from './screens/signupScreen';
import UserProfile from './screens/UserProfile';
import SearchScreen from './screens/searchscreen';
import HomeScreen from './screens/homescreen';
import PlaceScreen from './screens/placescreen';
import ForgotScreen from './screens/forgetscreen';
import PinCodeScreen from './screens/pincodescreen';
import NewPasswordScreen from './screens/newpasswordscreen';
import CheckoutScreen from './screens/checkout';
import SavedPlacesScreen from './screens/savedplacescreen';
import FilterScreen from './screens/filterscreen';
import NotificationScreen from './screens/notificationscreen';
import WeatherScreen from './screens/weather';
import BookingScreen from './screens/booking';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} /> 
    </Drawer.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        options={{ headerShown: false }}
        name="SplashScreen" component={SplashScreen} />

        <Stack.Screen
        options={{ headerShown: false }}
        name="NewPasswordScreen" component={NewPasswordScreen} />
       
        <Stack.Screen
        options={{ headerShown: false }}
        name="ForgotScreen" component={ForgotScreen} />
        
        <Stack.Screen
        options={{ headerShown: false }}
        name="PinCodeScreen" component={PinCodeScreen} />
        
        <Stack.Screen
        options={{ headerShown: false }}
        name="CheckoutScreen" component={CheckoutScreen} />
        
        <Stack.Screen
        options={{ headerShown: false }}
        name="SavedPlacesScreen" component={SavedPlacesScreen} />
        
        <Stack.Screen
        options={{ headerShown: false }}
        name="FilterScreen" component={FilterScreen} />
        
        <Stack.Screen
        options={{ headerShown: false }}
        name="NotificationScreen" component={NotificationScreen} />
        
        <Stack.Screen
        options={{ headerShown: false }}
        name="LoginScreen" component={LoginScreen} />

        <Stack.Screen
        options={{ headerShown: false }}
        name="SignupScreen" component={SignupScreen} />

        <Stack.Screen
        options={{ headerShown: false }}
        name="UserProfile" component={UserProfile} />

        <Stack.Screen
        options={{ headerShown: false }}
        name="SearchScreen" component={SearchScreen} />

        <Stack.Screen 
        options={{headerShown: false,}} 
        name="HomeScreen" component={HomeScreen} />

        <Stack.Screen
         options={{ headerShown: false }}
         name="PlaceScreen" component={PlaceScreen} />

        <Stack.Screen
        options={{ headerShown: false }}
        name="WeatherScreen" component={WeatherScreen} />

        <Stack.Screen
        options={{ headerShown: false }}
        name="BookingScreen" component={BookingScreen} />

        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
