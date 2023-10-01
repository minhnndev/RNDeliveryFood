import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  FoodDetail,
  Checkout,
  MyCart,
  Success,
  AddCard,
  MyCard,
  DeliveryStatus,
  Map,
} from '../screens';
import CustomDrawer from './CustomDrawer';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={CustomDrawer} />
      <Stack.Screen name="FoodDetail" component={FoodDetail} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="MyCart" component={MyCart} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="MyCard" component={MyCard} />
      <Stack.Screen name="DeliveryStatus" component={DeliveryStatus} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
};

export default App;
