/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import OTPInputView from '@twotalltotems/react-native-otp-input';

import TextButton from '../../components/TextButton';
import {COLORS, FONTS, SIZES} from '../../constants';

import AuthLayout from './AuthLayout';

const Otp = () => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          return prevTimer;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AuthLayout
      title="OTP Authentication"
      subtitle="An authentication code has sent to minhnndev@himail.com"
      titleContainerStyle={{
        marginTop: 48,
      }}>
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}>
        {/* OTP Inputs */}

        <OTPInputView
          autoFocusOnLoad
          pinCount={4}
          style={{
            width: '100%',
            height: 48,
          }}
          codeInputFieldStyle={{
            width: 65,
            height: 65,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            color: COLORS.black,
            ...FONTS.h3,
          }}
          onCodeFilled={code => {
            console.log(code);
          }}
        />
        {/* Footer */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: SIZES.padding,
          }}>
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.body3,
            }}>
            Didn't receive code?
          </Text>
          <TextButton
            label={`Resend (${timer}s)`}
            disabled={timer === 0 ? false : true}
            buttonContainerStyle={{
              marginLeft: SIZES.base,
              backgroundColor: null,
            }}
            onPress={() => setTimer(60)}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
          />
        </View>
      </View>

      {/* Footer */}
      <View
        style={{
          marginBottom: SIZES.padding * 2,
        }}>
        <TextButton
          label="Continue"
          buttonContainerStyle={{
            height: 56,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          labelStyle={{
            color: COLORS.white,
            ...FONTS.h3,
            fontWeight: 'bold',
          }}
          onPress={() => console.log('Continue')}
        />

        <View
          style={{
            alignItems: 'center',
            marginTop: SIZES.padding,
          }}>
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.body3,
            }}>
            By Signing up, you agree to our.
          </Text>
          <TextButton
            label="Terms and Conditions"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => console.log('TnC')}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default Otp;
