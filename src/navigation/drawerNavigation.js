import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigation from './bottomTabNavigation';
import {SettingScreen} from '../screens';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigation} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
