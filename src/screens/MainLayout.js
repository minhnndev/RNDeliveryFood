import {useDrawerProgress} from '@react-navigation/drawer';
import React from 'react';
import {View, Text, useWindowDimensions} from 'react-native';

import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

const MainLayout = () => {
  const progress = useDrawerProgress();

  const {width} = useWindowDimensions();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {perspective: 1000},
      {
        scale: interpolate(progress.value, [0, 1], [1, 0.8], 'clamp'),
      },
      // {
      //   rotateY: `${interpolate(progress.value, [0, 1], [0, -10], 'clamp')}deg`,
      // },
      // {
      //   translateX: interpolate(
      //     progress.value,
      //     [0, 1],
      //     [0, Platform.OS === 'android' ? width - 130 : -60],
      //     'clamp',
      //   ),
      // },
    ],
    borderRadius: interpolate(progress.value, [0, 1], [0, 24], 'clamp'),
    overflow: 'hidden',
  }));
  return (
    <Animated.View
      style={[
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        },
        animatedStyle,
      ]}>
      <Text>MainLayout</Text>
    </Animated.View>
  );
};

export default MainLayout;
