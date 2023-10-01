/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const Section = ({title, onPress, children, containerStyle}) => {
  return (
    <View>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          //   marginHorizontal: SIZES.padding,
          marginTop: 24,
          marginBottom: 20,
          ...containerStyle,
        }}>
        <Text style={{flex: 1, ...FONTS.h3}}>{title}</Text>
        {onPress && (
          <TouchableOpacity onPress={onPress}>
            <Text style={{color: COLORS.primary, ...FONTS.body3}}>
              Show All
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {/* Content */}
      {children}
    </View>
  );
};
