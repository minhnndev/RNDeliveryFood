/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import {SIZES, COLORS, FONTS, icons, dummyData} from '../../constants';
import HorizontalFoodCard from '../../components/HorizontalFoodCard';
import VerticalFoodCard from '../../components/VerticalFoodCard';
import FilterModal from '../../components/FilterModal';

export const Section = ({title, onPress, children}) => {
  return (
    <View>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          marginTop: 24,
          marginBottom: 20,
        }}>
        <Text style={{flex: 1, ...FONTS.h3}}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{color: COLORS.primary, ...FONTS.body3}}>Show All</Text>
        </TouchableOpacity>
      </View>
      {/* Content */}
      {children}
    </View>
  );
};

const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [popular, setPopular] = useState([]);
  const [recommends, setRecommends] = useState([]);
  const [menuList, setMenuList] = useState([]);

  const [showFilterModal, setShowFilterModal] = useState(false);

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, [selectedCategoryId, selectedMenuType]);

  const handleChangeCategory = (categoryId, menuTypeId) => {
    let selectedMenu = dummyData.menu.find(a => a.id === menuTypeId);
    let menuListData = selectedMenu.list.filter(i =>
      i.categories.includes(categoryId),
    );

    let selectedRecommend = dummyData.menu.find(a => a.name === 'Recommended');
    let selectedPopular = dummyData.menu.find(a => a.name === 'Popular');

    setRecommends(
      selectedRecommend.list.filter(i => i.categories.includes(categoryId)),
    );

    setPopular(
      selectedPopular.list.filter(i => i.categories.includes(categoryId)),
    );

    setMenuList(menuListData);
  };

  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}>
        <Image
          source={icons.search}
          style={{
            height: 20,
            width: 20,
            tintColor: COLORS.black,
          }}
        />

        <TextInput
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
          placeholder="Search ..."
        />

        <TouchableOpacity onPress={() => setShowFilterModal(true)}>
          <Image
            source={icons.filter}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.black,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderFoodCategories = () => {
    return (
      <FlatList
        horizontal
        data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                height: 56,
                marginTop: SIZES.padding,
                marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
                marginRight:
                  index === dummyData.categories.length - 1 ? SIZES.padding : 0,
                paddingHorizontal: 8,
                borderRadius: SIZES.radius,
                backgroundColor:
                  selectedCategoryId === item.id
                    ? COLORS.primary
                    : COLORS.lightGray2,
              }}
              onPress={() => {
                setSelectedCategoryId(item.id);
                handleChangeCategory(item.id, selectedMenuType);
              }}>
              <Image
                source={item.icon}
                style={{
                  marginTop: 4,
                  height: 48,
                  width: 48,
                }}
              />
              <Text
                style={{
                  alignSelf: 'center',
                  color:
                    selectedCategoryId === item.id
                      ? COLORS.white
                      : COLORS.black,
                  ...FONTS.h3,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  const renderMenuTypes = () => {
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={item => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 20,
        }}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                marginLeft: SIZES.padding,
                marginRight:
                  index === dummyData.menu.length - 1 ? SIZES.padding : 0,
              }}
              onPress={() => {
                setSelectedMenuType(item.id);
              }}>
              <Text
                style={{
                  color:
                    selectedMenuType === item.id
                      ? COLORS.primary
                      : COLORS.black,
                  ...FONTS.h3,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  const renderPopularSection = () => {
    return (
      <Section
        title="Popular Near You"
        onPress={() => console.log('Show all popular items')}>
        <FlatList
          data={popular}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <VerticalFoodCard
                containerStyle={{
                  padding: 16,
                  marginLeft: index === 0 ? SIZES.padding : 18,
                  marginRight: index === popular.length - 1 ? SIZES.padding : 0,
                  alignItems: 'center',
                }}
                imageStyle={{
                  marginTop: 36,
                  height: 148,
                  width: 148,
                }}
                item={item}
                onPress={() => console.log('Food')}
              />
            );
          }}
        />
      </Section>
    );
  };

  const renderRecommendedSection = () => {
    return (
      <Section
        title="Recommended"
        onPress={() => console.log('Show all recommended')}>
        <FlatList
          data={recommends}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <HorizontalFoodCard
                containerStyle={{
                  height: 180,
                  width: SIZES.width * 0.85,
                  marginLeft: index === 0 ? SIZES.padding : 18,
                  marginRight:
                    index === dummyData.menu.length - 1 ? SIZES.padding : 0,
                  paddingRight: SIZES.radius,
                  alignItems: 'center',
                }}
                imageStyle={{
                  marginTop: 36,
                  height: 148,
                  width: 148,
                }}
                item={item}
                onPress={() => console.log('Food')}
              />
            );
          }}
        />
      </Section>
    );
  };

  const renderDelivery = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
        }}>
        <Text
          style={{
            color: COLORS.primary,
            ...FONTS.body3,
          }}>
          DELIVERY TO
        </Text>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: SIZES.base,
            alignItems: 'center',
          }}>
          <Text style={{...FONTS.h3}}>{dummyData?.myProfile?.address}</Text>
          <Image
            source={icons.down_arrow}
            style={{
              marginLeft: SIZES.base,
              height: 20,
              width: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {renderHeader()}
      <FlatList
        data={menuList}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 130,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
              imageStyle={{
                marginTop: 20,
                height: 110,
                width: 110,
              }}
              item={item}
              onPress={() => console.log('Food')}
            />
          );
        }}
        ListHeaderComponent={
          <>
            {renderDelivery()}
            {renderFoodCategories()}
            {renderPopularSection()}
            {renderRecommendedSection()}
            {renderMenuTypes()}
          </>
        }
        ListFooterComponent={<View style={{height: 200}} />}
      />

      {showFilterModal && (
        <FilterModal
          isVisible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
        />
      )}
    </View>
  );
};

export default Home;
