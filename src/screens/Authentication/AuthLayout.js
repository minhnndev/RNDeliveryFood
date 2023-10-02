import React from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {SIZES, FONTS, COLORS, images, constants} from '../../constants';

const AuthLayout = ({title, subtitle, titleContainerStyle, children}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.padding + 20,
        backgroundColor: COLORS.white,
      }}>
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={images.logo_02}
            resizeMode="contain"
            style={{
              width: 200,
              height: 100,
            }}
          />
        </View>

        {/* Title & Subtitle */}
        <View
          style={{
            marginTop: SIZES.padding,
            ...titleContainerStyle,
          }}>
          <Text
            style={{
              textAlign: 'center',
              ...FONTS.h2,
              fontWeight: 'bold',
            }}>
            {title}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: COLORS.darkGray,
              marginTop: SIZES.base,
              ...FONTS.body3,
            }}>
            {subtitle}
          </Text>
        </View>
        {children}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
