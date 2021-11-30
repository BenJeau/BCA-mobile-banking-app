import React from 'react';
import { ScrollView } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';

import {
  AccountOverview,
  BasicListItem,
  Button,
  Text,
  TextEdit,
  Title,
} from '../components';
import { useChangeNavigationBarColor, useTheme } from '../hooks';
import { accountsData, accountType } from '../data/accounts';
import dayjs from 'dayjs';

const TransferAccount: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();
  useChangeNavigationBarColor(theme.colors.background, theme.dark);

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        paddingTop: headerHeight,
      }}>
      <Title>Source Account</Title>
      <AccountOverview {...accountsData[accountType.checking][0]} />

      <Title style={{ marginTop: 25 }}>Destination Account</Title>
      <AccountOverview {...accountsData[accountType.savings + 's'][0]} />

      <Title style={{ marginTop: 25 }}>Amount</Title>
      <Text>Enter the amount to transfer</Text>
      <TextEdit
        textInputProps={{
          placeholder: '',
          keyboardType: 'numeric',
        }}
      />

      <Title style={{ marginTop: 25 }}>Frequency</Title>
      <Text>Change the frequency of the transfer</Text>
      <BasicListItem
        text="Now"
        style={{ borderBottomWidth: 0, paddingHorizontal: 0 }}
      />

      <Title style={{ marginTop: 25 }}>Date</Title>
      <Text>{dayjs().format('MMMM DD, YYYY')}</Text>
      <Button
        label="Clear"
        type="secondary"
        style={{ marginTop: 20 }}
        onPress={() => navigation.navigate('Overview')}
      />
      <Button
        label="Deposit"
        icon="money-dollar-circle-fill"
        style={{ marginTop: 10 }}
        onPress={() => navigation.navigate('Overview')}
      />
    </ScrollView>
  );
};

export default TransferAccount;
