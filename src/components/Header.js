/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {COLORS, FONTS, SIZES} from '../constants';

const Header = ({containerStyle, title, leftHeader, rightHeader}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        ...containerStyle,
      }}>
      {leftHeader}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{...FONTS.h3}}>{title}</Text>
      </View>
      {rightHeader}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
