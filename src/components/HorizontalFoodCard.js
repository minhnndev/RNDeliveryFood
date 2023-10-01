/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {COLORS, FONTS, SIZES, icons} from '../constants';

const HorizontalFoodCard = ({containerStyle, imageStyle, item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
          ...containerStyle,
        }}>
        {/* Image */}
        <Image
          source={item.image}
          style={{
            width: 90,
            height: 90,
            borderTopLeftRadius: SIZES.radius,
            borderBottomLeftRadius: SIZES.radius,
            ...imageStyle,
          }}
        />
        {/* Info */}
        <View style={{flex: 1}}>
          {/* Name */}
          <Text style={{...FONTS.h3, fontSize: 17}}>{item.name}</Text>
          {/* Description */}
          <Text style={{color: COLORS.darkGray2, ...FONTS.body4}}>
            {item.description}
          </Text>
          {/* Price */}
          <Text style={{marginTop: SIZES.base, ...FONTS.h2}}>
            ${item.price}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            top: 8,
            right: 12,
          }}>
          <Image
            source={icons.calories}
            style={{
              height: 20,
              width: 20,
              marginRight: 8,
            }}
          />
          <Text style={{color: COLORS.darkGray2, ...FONTS.body3}}>
            {item.calories} Calories
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalFoodCard;

const styles = StyleSheet.create({});
