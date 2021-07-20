import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RecipeScreen = () => {
  return (
    <View style={styles.center}>
      <Text>Recipe Page</Text>
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
export default RecipeScreen;
