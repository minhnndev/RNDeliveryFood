import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import {SIZES, FONTS, COLORS} from '../constants';

const CustomSwitch = ({value, onChange}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onChange(!value)}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={value ? styles.containerOn : styles.containerOff}>
          <View
            style={{
              ...styles.dot,
              marginLeft: value ? 18 : 0,
              marginRight: value ? 0 : 18,
            }}
          />
        </View>
        <Text
          style={{
            marginLeft: SIZES.base,
            color: COLORS.gray,
            ...FONTS.body4,
          }}>
          Save me
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  containerOn: {
    width: 40,
    height: 20,
    paddingRight: 4,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  containerOff: {
    width: 40,
    height: 20,
    paddingLeft: 4,
    borderRadius: 12,
    backgroundColor: COLORS.gray,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.white,
  },
});
