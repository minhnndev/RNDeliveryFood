/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {Animated, Image, ImageBackground, Text, View} from 'react-native';

import TextButton from '../../components/TextButton';
import {COLORS, FONTS, SIZES, constants, images} from '../../constants';

const Dots = ({scrollX}) => {
  const dotPosition = Animated.divide(scrollX, SIZES.width);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {constants.onboarding_screens.map((item, index) => {
        const dotColor = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [COLORS.lightOrange, COLORS.primary, COLORS.lightOrange],
          extrapolate: 'clamp',
        });

        const dotWidth = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [10, 30, 10],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={`dot-${index}`}
            style={{
              borderRadius: 10,
              backgroundColor: dotColor,
              marginHorizontal: 6,
              width: dotWidth,
              height: 10,
            }}
          />
        );
      })}
    </View>
  );
};

const OnBoarding = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();

  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewChangeRef = useRef(({viewableItems, changed}) => {
    setCurrentIndex(viewableItems[0].index);
  });

  const renderHeaderLogo = () => {
    return (
      <View
        style={{
          position: 'absolute',
          top: SIZES.height > 800 ? 48 : 24,
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={images.logo_02}
          resizeMode="contain"
          style={{
            width: SIZES.width * 0.5,
            height: 100,
          }}
        />
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          height: 160,
        }}>
        {/* Pagination */}
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Dots scrollX={scrollX} />
        </View>
        {/* Buttons */}
        {currentIndex < constants.onboarding_screens.length - 1 ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: SIZES.padding,
              paddingVertical: SIZES.padding,
            }}>
            <TextButton
              label="Skip"
              labelStyle={{
                color: COLORS.darkGray,
              }}
              buttonContainerStyle={{
                backgroundColor: null,
              }}
              onPress={() => navigation.replace('SignIn')}
            />
            <TextButton
              label="Next"
              labelStyle={{
                fontSize: 18,
                fontWeight: 'bold',
                color: COLORS.white,
              }}
              buttonContainerStyle={{
                height: 60,
                width: 200,
                borderRadius: SIZES.radius,
              }}
              onPress={() => {
                flatListRef?.current?.scrollToIndex({
                  index: currentIndex + 1,
                  animated: true,
                });
              }}
            />
          </View>
        ) : (
          <View
            style={{
              paddingHorizontal: SIZES.padding,
              paddingVertical: SIZES.padding,
            }}>
            <TextButton
              label="Let's Get Started"
              labelStyle={{
                fontSize: 18,
                fontWeight: 'bold',
                color: COLORS.white,
              }}
              buttonContainerStyle={{
                height: 60,
                borderRadius: SIZES.radius,
              }}
              onPress={() => navigation.replace('SignIn')}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {renderHeaderLogo()}

      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {x: scrollX}},
            },
          ],
          {useNativeDriver: false},
        )}
        onViewableItemsChanged={onViewChangeRef?.current}
        data={constants.onboarding_screens}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => {
          return (
            <View style={{width: SIZES.width}}>
              <View style={{flex: 3}}>
                <ImageBackground
                  source={item.backgroundImage}
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    width: '100%',
                    height: index === 1 ? '93.6%' : '100%',
                  }}>
                  <Image
                    source={item.bannerImage}
                    resizeMode="contain"
                    style={{
                      width: SIZES.width * 0.8,
                      height: SIZES.width * 0.8,
                      marginBottom: -SIZES.padding,
                    }}
                  />
                </ImageBackground>
              </View>
              {/* Detail */}
              <View
                style={{
                  flex: 1,
                  marginTop: 32,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: SIZES.padding,
                }}>
                <Text style={{...FONTS.h1, fontSize: 24}}>{item.title}</Text>
                <Text
                  style={{
                    ...FONTS.body3,
                    textAlign: 'center',
                    marginTop: SIZES.radius,
                    color: COLORS.darkGray,
                    paddingHorizontal: SIZES.padding,
                  }}>
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />
      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default OnBoarding;
