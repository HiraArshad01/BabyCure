import 'react-native-gesture-handler';

import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import homeScreen from '../Screens/homeScreen';
import AddBaby from '../Screens/AddBaby';
import Activities from '../Screens/Activities';
import More from '../Screens/More';



const Tab = createBottomTabNavigator();

function BottomNavBar() {
  return (
    <NavigationContainer>

    <Tab.Navigator>
      <Tab.Screen name="homeScreen" component={homeScreen} />
      <Tab.Screen name="AddBaby" component={AddBaby} />
    </Tab.Navigator>
    </NavigationContainer>
  
  );
}


export default BottomNavBar;