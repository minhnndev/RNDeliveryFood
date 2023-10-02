/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';

const TextIconButton = ({
  containerStyle,
  label,
  labelStyle,
  icon,
  iconPostision = 'left',
  iconStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...containerStyle,
      }}>
      {iconPostision === 'left' && icon && (
        <Image
          source={icon}
          style={[
            {
              ...iconStyle,
            },
            styles.image,
          ]}
        />
      )}
      <Text
        style={{
          ...FONTS.h3,
          ...labelStyle,
        }}>
        {label}
      </Text>
      {iconPostision === 'right' && icon && (
        <Image
          source={icon}
          style={[
            {
              ...iconStyle,
            },
            styles.image,
          ]}
        />
      )}
    </TouchableOpacity>
  );
};

export default TextIconButton;

const styles = StyleSheet.create({
  image: {
    marginLeft: 4,
    width: 20,
    height: 20,
  },
});
