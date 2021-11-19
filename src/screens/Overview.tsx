import React from 'react';
import { View } from 'react-native';

import { Text } from '../components';
import { useChangeNavigationBarColor, useTheme } from '../hooks';

const Overview: React.FC = () => {
  const theme = useTheme();
  useChangeNavigationBarColor(theme.colors.text, theme.dark);

  return (
    <View>
      <Text>Overview</Text>
    </View>
  );
};

export default Overview;
