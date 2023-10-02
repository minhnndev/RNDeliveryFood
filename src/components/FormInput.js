import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

import {SIZES, FONTS, COLORS, images, constants} from '../constants';

const FormInput = ({
  containerStyle,
  label,
  placeholder,
  inputStyle,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  errorMsg,
  defaultValue,
  ...props
}) => {
  return (
    <View style={{...containerStyle}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: COLORS.gray, ...FONTS.body4}}>{label}</Text>
        <Text style={{color: COLORS.red, ...FONTS.body4}}>{errorMsg}</Text>
      </View>

      <View
        style={{
          marginTop: SIZES.base,
          flexDirection: 'row',
          height: 56,
          paddingHorizontal: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}>
        {prependComponent}
        <TextInput
          style={{
            flex: 1,
            ...inputStyle,
          }}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          selectionColor={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          onChangeText={onChange}
          defaultValue={defaultValue}
          {...props}
        />
        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({});
