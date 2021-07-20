import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then(); // To avoid 'Unrecognized font family ionicons' Warning

import {HomeStack} from './stackNavigation';
import { FavouriteScreen, SettingScreen} from '../screens';
const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#FF4500',
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: 'white',
          borderTopColor: 'transparent',
          borderRadius:10,
          marginLeft:10,
          marginRight:10,
          paddingBottom:10,
          paddingTop:10,
          height: 70
        },
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Ionicons name='home' size={23} color= {focused ? '#FF4500':'#808080'}/>
          ),
        }}
      />
      <BottomTab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarLabel: 'Favourite',
          tabBarIcon: ({focused}) => (
            <Ionicons name='heart' size={23} color= {focused ? '#FF4500':'#808080'} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({focused}) => (
            <Ionicons name='cog' size={23} color= {focused ? '#FF4500':'#808080'} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
