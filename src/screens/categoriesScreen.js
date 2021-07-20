import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>Categories Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
  });
export default CategoriesScreen;
