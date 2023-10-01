/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';

import {FONTS, SIZES, constants, COLORS, icons} from '../constants';

import {Section} from './Section';
import IconButton from './IconButton';
import OverPointSlider from './OverPointSlider';
import TextButton from './TextButton';
import TextIconButton from './TextIconButton';

const FilterModal = ({isVisible, onClose}) => {
  const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;

  const [showFilterModal, setShowFilterModal] = useState(isVisible);
  const [deliveryTime, setDeliveryTime] = useState('');
  const [ratings, setRatings] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 250,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [modalAnimatedValue, onClose, showFilterModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 680],
  });

  const renderDistance = () => {
    return (
      <Section title="Distance">
        <View
          style={{
            alignItems: 'center',
          }}>
          <OverPointSlider
            values={[3, 10]}
            min={1}
            max={20}
            postfix="km"
            onChangeValue={values => console.log(values)}
          />
        </View>
      </Section>
    );
  };

  const renderDeliveryTime = () => {
    return (
      <Section title="Delivery Time" containerStyle={{marginTop: 40}}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {constants.delivery_time.map((item, index) => {
            return (
              <TextButton
                key={`delivery_time-${index}`}
                label={item.label}
                labelStyle={{
                  color: item.id === deliveryTime ? COLORS.white : COLORS.black,
                  ...FONTS.body3,
                }}
                buttonContainerStyle={{
                  width: '30%',
                  height: 48,
                  margin: 4,
                  alignItems: 'center',
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id === deliveryTime
                      ? COLORS.primary
                      : COLORS.lightGray2,
                }}
                onPress={() => setDeliveryTime(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  };

  const renderPricingRange = () => {
    return (
      <Section title="Pricing Range">
        <View
          style={{
            alignItems: 'center',
          }}>
          <OverPointSlider
            values={[10, 50]}
            min={1}
            max={100}
            postfix="$"
            onChangeValue={values => console.log(values)}
          />
        </View>
      </Section>
    );
  };

  const renderRatings = () => {
    return (
      <Section title="Ratings" containerStyle={{marginTop: 40}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {constants.ratings.map((item, index) => {
            return (
              <TextIconButton
                key={`Ratings-${index}`}
                containerStyle={{
                  flex: 1,
                  height: 48,
                  margin: 4,
                  alignItems: 'center',
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id === ratings ? COLORS.primary : COLORS.lightGray2,
                }}
                icon={icons.star}
                iconStyle={{
                  width: 16,
                  height: 16,
                  tintColor: item.id === ratings ? COLORS.white : COLORS.gray2,
                }}
                label={item.label}
                labelStyle={{
                  color: item.id === ratings ? COLORS.white : COLORS.gray,
                }}
                onPress={() => setRatings(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  };

  const renderTags = () => {
    return (
      <Section title="Tags" containerStyle={{}}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {constants.tags.map((item, index) => {
            return (
              <TextButton
                key={`Tags-${index}`}
                label={item.label}
                labelStyle={{
                  color: item.id === tags ? COLORS.white : COLORS.gray,
                  ...FONTS.body3,
                }}
                buttonContainerStyle={{
                  paddingHorizontal: SIZES.padding,
                  height: 48,
                  margin: 4,
                  alignItems: 'center',
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id === tags ? COLORS.primary : COLORS.lightGray2,
                }}
                onPress={() => setTags(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  };

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.transparentBlack7,
        }}>
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </TouchableWithoutFeedback>
        <Animated.View
          style={{
            position: 'absolute',
            left: 0,
            top: modalY,
            width: '100%',
            height: '100%',
            padding: SIZES.padding,
            borderTopLeftRadius: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
            backgroundColor: COLORS.white,
          }}>
          {/* Header */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{flex: 1, ...FONTS.h3}}>Filter Your Search</Text>
            <IconButton
              containerStyle={{
                borderRadius: 12,
                borderWidth: 2,
                borderColor: COLORS.lightGray1,
              }}
              icon={icons.cross}
              iconStyle={{
                tintColor: COLORS.gray,
              }}
              onPress={() => setShowFilterModal(false)}
            />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 350,
            }}>
            {/* Distance */}
            {renderDistance()}
            {/* Delivery Time */}
            {renderDeliveryTime()}
            {/* Pricing Range */}
            {renderPricingRange()}
            {/* Ratings */}
            {renderRatings()}
            {/* Tags */}
            {renderTags()}
          </ScrollView>
          {/* Apply Button */}
          <View
            style={{
              position: 'absolute',
              bottom: 250,
              left: 0,
              right: 0,
              height: 110,
              paddingHorizontal: SIZES.padding,
              paddingVertical: SIZES.radius,
              backgroundColor: COLORS.white,
            }}>
            <TextButton
              label="Apply Filters"
              buttonContainerStyle={{
                height: 48,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.primary,
              }}
              onPress={() => console.log('Apply Filter')}
            />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({});
