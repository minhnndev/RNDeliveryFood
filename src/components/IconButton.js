import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';

const IconButton = ({containerStyle, icon, iconStyle, onPress}) => {
  return (
    <View
      style={{
        ...containerStyle,
      }}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={icon}
          style={{
            width: 32,
            height: 32,
            tintColor: COLORS.white,
            ...iconStyle,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
