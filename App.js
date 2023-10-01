import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import CustomDrawer from './src/navigation/CustomDrawer';
import store from './src/stores';

import AuthStack from './src/navigation/AuthStack';

const Stack = createStackNavigator();

const isLogin = true;

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={CustomDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>{isLogin ? <AppStack /> : <AuthStack />}</Provider>
  );
};

export default App;
