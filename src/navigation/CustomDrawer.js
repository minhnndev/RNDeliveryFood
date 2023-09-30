/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';

import {MainLayout} from '../screens';

import {COLORS, FONTS, SIZES, icons, dummyData, constants} from '../constants';

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({label, icon, isFocused}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 40,
        marginBottom: SIZES.base,
        alignItems: 'center',
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
      }}
      onPress={() => console.log(label)}>
      <Image
        source={icon}
        style={{width: 20, height: 20, tintColor: COLORS.white}}
      />
      <Text
        style={{
          marginLeft: 16,
          color: COLORS.white,
          ...FONTS.h3,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({navigation}) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1}}>
      <View style={{flex: 1, paddingHorizontal: SIZES.radius}}>
        {/* Close */}
        <View style={{alignItems: 'flex-start', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              alignContent: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.closeDrawer()}>
            <Image
              source={icons.cross}
              style={{height: 36, width: 36, tintColor: COLORS.white}}
            />
          </TouchableOpacity>
        </View>

        {/* Profile */}

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            alignItems: 'center',
          }}>
          <Image
            source={dummyData.myProfile?.profile_image}
            style={{width: 48, height: 48, borderRadius: SIZES.radius}}
          />
          <View style={{marginLeft: SIZES.radius}}>
            <Text style={{color: COLORS.white, ...FONTS.h3}}>Profile name</Text>
            <Text style={{color: COLORS.white, ...FONTS.body4}}>
              View your profile
            </Text>
          </View>
        </TouchableOpacity>

        {/* Drawer Items */}

        <View style={{flex: 1, marginTop: SIZES.padding}}>
          <CustomDrawerItem label={constants.screens.home} icon={icons.home} />
          <CustomDrawerItem
            label={constants.screens.mywallet}
            icon={icons.wallet}
          />
          <CustomDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
          />
          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
          />

          {/* Line Divider */}
          <View
            style={{
              height: 1,
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
            }}
          />

          <CustomDrawerItem label="Track Your Order" icon={icons.location} />
          <CustomDrawerItem label="Coupons" icon={icons.coupon} />
          <CustomDrawerItem label="Settings" icon={icons.setting} />
          <CustomDrawerItem label="Invite a Friend" icon={icons.profile} />
          <CustomDrawerItem label="Help Center" icon={icons.help} />

          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              paddingBottom: SIZES.padding,
            }}>
            <CustomDrawerItem label="Logout" icon={icons.logout} />
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerStyle: {
            flex: 1,
            width: '65%',
            paddingRight: 20,
            backgroundColor: 'transparent',
          },

          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        initialRouteName="MainLayout"
        drawerContent={props => {
          return <CustomDrawerContent navigation={props.navigation} />;
        }}>
        <Drawer.Screen name="MainLayout">
          {props => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
