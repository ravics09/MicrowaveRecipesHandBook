import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const CategoryScreen = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>Category Page</Text>
      <Button
        title="See This Recipe"
        onPress={() => navigation.navigate('Recipe')}
      />
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
export default CategoryScreen;
