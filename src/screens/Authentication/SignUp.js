/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import AuthLayout from './AuthLayout';
import {COLORS, SIZES, FONTS, icons} from '../../constants';
import FormInput from '../../components/FormInput';
import {utils} from '../../utils';
import TextButton from '../../components/TextButton';
import TextIconButton from '../../components/TextIconButton';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isEnableSignUp = () => {
    return (
      email !== '' &&
      username !== '' &&
      password !== '' &&
      emailError === '' &&
      usernameError === '' &&
      passwordError === ''
    );
  };

  return (
    <AuthLayout
      title="Getting Stated"
      subtitle="Create you account to not hungry !!"
      titleContainerStyle={{
        marginTop: SIZES.radius,
      }}>
      {/* Form Input */}
      <View style={{flex: 1, marginTop: 48}}>
        <FormInput
          label="Email"
          placeholder="Enter Email"
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

        <FormInput
          label="Username"
          placeholder="Enter Username"
          autoCompleteType="username"
          onChange={value => {
            setUsername(value);
          }}
          errorMsg={usernameError}
          containerStyle={{
            marginTop: SIZES.padding,
          }}
          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={
                  username === '' || (username !== '' && usernameError === '')
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    username === ''
                      ? COLORS.gray
                      : username !== '' && usernameError === ''
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
          onChange={value => {
            utils.validatePassword(value, setPasswordError);
            setPassword(value);
          }}
          containerStyle={{
            marginTop: 16,
          }}
          errorMsg={passwordError}
          appendComponent={
            <TouchableOpacity
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    password === ''
                      ? COLORS.gray
                      : password !== '' && passwordError === ''
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </TouchableOpacity>
          }
        />

        {/* Sign Up & Sign In */}
        <TextButton
          disabled={isEnableSignUp()}
          label="Sign Up"
          buttonContainerStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignUp() ? COLORS.primary : COLORS.gray,
          }}
          labelStyle={{
            color: COLORS.white,
            ...FONTS.h3,
          }}
          onPress={() => navigation.navigate('Otp')}
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
            Already have an account?
          </Text>
          <TextButton
            label="Sign In"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => navigation.goBack()}
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

export default SignUp;
