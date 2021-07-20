import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  HomeScreen,
  CategoryScreen,
  CategoriesScreen,
  RecipeScreen
} from '../screens';
const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: '#F0F8FF'},
        headerTintColor: '#FF4500',
        headerTitleStyle: {fontWeight: 'bold'},
        headerBackTitle: 'back',
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Microwave Recipes Handbook'}}
      />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{title: 'Categories'}}
      />
      <Stack.Screen
        name="Recipe"
        component={RecipeScreen}
        options={{title: 'Recipe'}}
      />
    </Stack.Navigator>
  );
};

export const CategoriesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {backgroundColor: '#F0F8FF'},
        headerTintColor: '#FF4500',
        headerTitleStyle: {fontWeight: 'bold'},
        headerBackTitle: 'back',
      }}>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{title: 'Categories'}}
      />
    </Stack.Navigator>
  );
};

export const CategoryStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Category"
      screenOptions={{
        headerStyle: {backgroundColor: '#F0F8FF'},
        headerTintColor: '#FF4500',
        headerTitleStyle: {fontWeight: 'bold'},
        headerBackTitle: 'back',
      }}>
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{title: 'Category'}}
      />
      <Stack.Screen
        name="Recipe"
        component={RecipeScreen}
        options={{title: 'Recipe'}}
      />
    </Stack.Navigator>
  );
};
