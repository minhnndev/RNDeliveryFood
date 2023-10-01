import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';

const TextButton = ({label, labelStyle, buttonContainerStyle, onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
      }}>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            marginLeft: 10,
            ...FONTS.h3,
            ...labelStyle,
          }}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TextButton;

const styles = StyleSheet.create({});
