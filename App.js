import {StatusBar} from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import SpaceCrafts from './screens/SpaceCrafts';
import DailyPic from './screens/DailyPic';
import StarMap from './screens/StarMap';

const Stack=createStackNavigator();
function App(){ 
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen'
        screenOptions={{headerShown:false}}>
          <Stack.Screen name='HomeScreen' component={HomeScreen}/>
          <Stack.Screen name='SpaceCrafts' component={SpaceCrafts}/>
          <Stack.Screen name='DailyPic' component={DailyPic}/>
          <Stack.Screen name='StarMap' component={StarMap}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;
