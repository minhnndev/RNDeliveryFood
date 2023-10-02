import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';

const TextButton = ({
  label,
  labelStyle,
  disabled,
  buttonContainerStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
      }}>
      <Text
        style={{
          marginLeft: 10,
          ...FONTS.h3,
          ...labelStyle,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({});
