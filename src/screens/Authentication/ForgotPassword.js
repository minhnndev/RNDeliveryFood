/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';

import {COLORS, SIZES, FONTS, icons} from '../../constants';
import AuthLayout from './AuthLayout';

import TextButton from '../../components/TextButton';
import FormInput from '../../components/FormInput';
import {utils} from '../../utils';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  return (
    <AuthLayout
      title="OTP Authentication"
      subtitle="An authentication code has sent to minhnndev@himail.com"
      titleContainerStyle={{
        marginTop: 48,
      }}>
      <View style={{flex: 1, marginTop: 48}}>
        <FormInput
          label="Email"
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={value => {
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          errorMsg={emailError}
          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={
                  email === '' || (email !== '' && emailError === '')
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email === ''
                      ? COLORS.gray
                      : email !== '' && emailError === ''
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
      </View>
      <TextButton
        label="Send Email"
        disabled={email !== '' && emailError === '' ? false : true}
        buttonContainerStyle={{
          height: 56,
          alignItems: 'center',
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor:
            email !== '' && emailError === '' ? COLORS.primary : COLORS.gray,
        }}
        onPress={() => console.log('Sign Up')}
        labelStyle={{
          color: COLORS.white,
          ...FONTS.h3,
          fontWeight: 'bold',
        }}
      />
    </AuthLayout>
  );
};

export default ForgotPassword;
