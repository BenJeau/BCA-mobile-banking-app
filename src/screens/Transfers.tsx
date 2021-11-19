import React from 'react';
import { View } from 'react-native';

import { Text } from '../components';
import { useChangeNavigationBarColor, useTheme } from '../hooks';

const Transfers: React.FC = () => {
  const theme = useTheme();
  useChangeNavigationBarColor(theme.colors.text, theme.dark);

  return (
    <View>
      <Text>Transfers</Text>
    </View>
  );
};

export default Transfers;
