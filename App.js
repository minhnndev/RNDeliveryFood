import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import store from './src/stores';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';

const isLogin = false;

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {isLogin ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
