/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {COLORS, SIZES} from '../constants';

const OverPointSlider = ({
  values,
  min,
  max,
  prefix,
  postfix,
  onChangeValue,
}) => {
  return (
    <View>
      <MultiSlider
        values={values}
        min={min}
        max={max}
        step={1}
        sliderLength={SIZES.width - SIZES.padding * 2 - 20}
        markerOffsetY={20}
        selectedStyle={{
          backgroundColor: COLORS.primary,
        }}
        trackStyle={{
          height: 12,
          borderRadius: 12,
          backgroundColor: COLORS.lightGray2,
        }}
        minMarkerOverlapDistance={50}
        onValuesChange={onChangeValue}
        customMarker={e => {
          return (
            <View
              style={{
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: 24,
                  width: 24,
                  borderRadius: 16,
                  borderWidth: 4,
                  borderColor: COLORS.white,
                  backgroundColor: COLORS.primary,
                  ...styles.shadow,
                }}
              />
              <Text
                style={{
                  marginTop: 12,
                  color: COLORS.darkGray2,
                  ...SIZES.body4,
                }}>
                {prefix} {e.currentValue} {postfix}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default OverPointSlider;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
  },
});
