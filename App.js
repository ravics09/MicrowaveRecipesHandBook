import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';

import BottomTab from './src/navigation/bottomTabNavigation';
import DrawerNavigator from './src/navigation/drawerNavigation';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({duration: 250});
  }, []);

  return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#F0F8FF'}}>
        <NavigationContainer>
          <DrawerNavigator/>
        </NavigationContainer>
      </SafeAreaView>
  );
};
export default App;
