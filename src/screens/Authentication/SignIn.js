/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import CustomSwitch from '../../components/CustomSwitch';
import FormInput from '../../components/FormInput';
import TextButton from '../../components/TextButton';
import TextIconButton from '../../components/TextIconButton';
import {COLORS, FONTS, SIZES, icons} from '../../constants';
import {utils} from '../../utils';
import AuthLayout from '../Authentication/AuthLayout';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmaiError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const isEnableSignIn = () => {
    return email !== '' && password !== '' && emailError == '';
  };

  return (
    <AuthLayout
      title="Let's Sign In"
      subtitle="Welcome back, you've been missed">
      <View style={{flex: 1, marginTop: 48}}>
        <FormInput
          label="Email"
          placeholder="Enter Email"
          autoCompleteType="email"
          onChange={value => {
            utils.validateEmail(value, setEmaiError);
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
                  email == '' || (email != '' && emailError == '')
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email == ''
                      ? COLORS.gray
                      : email !== '' && emailError == ''
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
        <FormInput
          label="Password"
          placeholder="Enter Password"
          autoCompleteType="password"
          secureTextEntry={!showPass}
          onChange={value => setPassword(value)}
          containerStyle={{
            marginTop: 16,
          }}
          appendComponent={
            <TouchableOpacity
              onPress={() => setShowPass(!showPass)}
              style={{
                width: 40,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.gray,
                }}
              />
            </TouchableOpacity>
          }
        />

        {/* Save me & Forgot */}

        <View
          style={{
            flexDirection: 'row',
            marginTop: 16,
            justifyContent: 'space-between',
          }}>
          <CustomSwitch
            value={rememberMe}
            onChange={value => setRememberMe(value)}
          />
          <TextButton
            label="Forgot Password?"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.gray,
              ...FONTS.body4,
            }}
            onPress={() => navigation.navigate('ForgotPassword')}
          />
        </View>

        {/* Sign In & Sign Up */}
        <TextButton
          label="Sign In"
          disabled={isEnableSignIn() ? false : true}
          buttonContainerStyle={{
            height: 56,
            alignItems: 'center',
            marginTop: 24,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignIn() ? COLORS.primary : COLORS.gray,
          }}
          labelStyle={{
            color: COLORS.white,
            ...FONTS.h3,
            fontWeight: 'bold',
          }}
          // onPress={() => navigation.navigate('Home')}
        />

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.body3,
            }}>
            Don't have an account?
          </Text>
          <TextButton
            label="Sign Up"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
              fontWeight: 'bold',
            }}
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>

      {/* Footer */}
      <View>
        <TextIconButton
          containerStyle={{
            height: 48,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.blue,
          }}
          icon={icons.fb}
          iconPosition="left"
          iconStyle={{
            tintColor: COLORS.white,
          }}
          label="Continue With Facebook"
          labelStyle={{
            marginLeft: SIZES.radius,
            color: COLORS.white,
          }}
          onPress={() => console.log('Facebook')}
        />
        <TextIconButton
          containerStyle={{
            height: 48,
            alignItems: 'center',
            marginTop: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}
          icon={icons.google}
          iconPosition="left"
          label="Continue With Google"
          labelStyle={{
            marginLeft: SIZES.radius,
          }}
          onPress={() => console.log('Google')}
        />
      </View>
    </AuthLayout>
  );
};

export default SignIn;
