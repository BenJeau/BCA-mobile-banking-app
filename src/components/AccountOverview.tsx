import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon, Text, Title } from '.';
import { Account, getAccountType } from '../data/accounts';
import { useTheme } from '../hooks';

interface AccountOverviewProps extends Account {
  onPress?: () => void;
}

const AccountOverview: React.FC<AccountOverviewProps> = ({
  type,
  name,
  balance,
  onPress,
}) => {
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Icon name="wallet-fill" color={theme.colors.text} size={25} />
        <Title>{balance}</Title>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{ color: theme.colors.text }}>John Smith</Text>
        <Text style={{ color: theme.colors.text }}>{getAccountType(type)}</Text>
      </View>
      <Text
        style={{
          color: theme.colors.text,
          fontFamily: 'Poppins-Medium',
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default AccountOverview;
