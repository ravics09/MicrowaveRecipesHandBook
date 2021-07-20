import React, {PureComponent} from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';

const App = () => {
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
