import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import RNBootSplash from "react-native-bootsplash";

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ duration: 250 });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <SafeAreaView>
        <View>
          <Text>Hello World!</Text>
        </View>
      </SafeAreaView>
    </>
  );
};
export default App;
