/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {COLORS, FONTS, SIZES, icons} from '../constants';

const VerticalFoodCard = ({containerStyle, imageStyle, item, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: 200,
        padding: SIZES.radius,
        alignItems: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}
      onPress={onPress}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            source={icons.calories}
            style={{
              width: 30,
              height: 30,
            }}
          />
          <Text style={{color: COLORS.darkGray2, ...FONTS.body3}}>
            {item.calories} Calories
          </Text>
        </View>
        <Image
          source={icons.love}
          style={{
            width: 20,
            height: 20,
            tintColor: item.isFavourite ? COLORS.primary : COLORS.gray,
          }}
        />
      </View>
      <View
        style={{
          height: 150,
          width: 150,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item.image}
          style={{
            height: '100%',
            width: '100%',
          }}
        />
      </View>

      <View
        style={{
          alignItems: 'center',
          marginTop: -20,
        }}>
        <Text style={{...FONTS.h3, fontSize: 17}}>{item.name}</Text>
        <Text style={{color: COLORS.darkGray2, ...FONTS.body4}}>
          {item.description}
        </Text>
        <Text style={{marginTop: SIZES.base, ...FONTS.h2}}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCard;

const styles = StyleSheet.create({});
