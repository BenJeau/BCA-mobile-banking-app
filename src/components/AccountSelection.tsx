import React from 'react';
import { Pressable, SectionList, View, ViewStyle } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';

import { Text, Title } from '.';
import { Account, accountsData } from '../data/accounts';
import { useTheme } from '../hooks';

interface AccountItemProps extends Account {
  style?: ViewStyle;
  navigationScreenDestination: string;
}

const AccountItem: React.FC<AccountItemProps> = ({
  balance,
  name,
  id,
  transactions,
  style,
  navigationScreenDestination,
}) => {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <View
      style={[
        {
          overflow: 'hidden',
          borderRadius: 10,
          elevation: 5,
        },
        style,
      ]}>
      <Pressable
        style={{
          backgroundColor: theme.colors.text,
          padding: 10,
        }}
        onPress={() => navigation.navigate(navigationScreenDestination, { id })}
        android_ripple={{
          borderless: false,
          color: theme.colors.background,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8,
          }}>
          <Text
            style={{
              fontSize: 17,
              color: theme.colors.background,
              fontFamily: 'Poppins-Bold',
            }}>
            {balance}
          </Text>
          <Text
            style={{
              color: theme.colors.background,
            }}>
            {name}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: theme.colors.background,
              fontSize: 12,
              fontFamily: 'Poppins-Regular',
            }}>
            Last activity:{' '}
            {dayjs(transactions[0].date).format('HH:MM - MMMM DD YYYY')}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

// convert accountsData to sections
const getSections = () => {
  return Object.entries(accountsData).map(([type, accounts]) => ({
    title: type,
    data: accounts,
  }));
};

interface AccountSelectionProps {
  headerComponent?: React.ReactElement;
  navigationScreenDestination: string;
}

const AccountSelection: React.FC<AccountSelectionProps> = ({
  navigationScreenDestination,
  headerComponent,
}) => {
  const headerHeight = useHeaderHeight();
  const theme = useTheme();

  return (
    <SectionList
      style={{
        paddingTop: headerHeight,
        paddingHorizontal: 20,
      }}
      sections={getSections()}
      ListHeaderComponent={headerComponent}
      stickySectionHeadersEnabled
      renderSectionHeader={({ section: { title, data } }) => (
        <View
          style={{
            paddingBottom: 5,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: `${theme.colors.background}90`,
          }}>
          <Title>{title}</Title>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              backgroundColor: theme.colors.primary,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 10,
            }}>
            <Text
              style={{
                color: theme.colors.background,
                fontFamily: 'Poppins-Black',
              }}>
              {data.length}
            </Text>
          </View>
        </View>
      )}
      renderItem={({ item }) => (
        <AccountItem
          key={item.id}
          {...item}
          style={{ marginBottom: 10 }}
          navigationScreenDestination={navigationScreenDestination}
        />
      )}
    />
  );
};

export default AccountSelection;
