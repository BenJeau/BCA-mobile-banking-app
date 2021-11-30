import React from 'react';

import { AccountSelection, Text } from '../components';
import { useChangeNavigationBarColor, useTheme } from '../hooks';

const Overview: React.FC = () => {
  const theme = useTheme();
  useChangeNavigationBarColor(theme.colors.text, theme.dark);

  return (
    <AccountSelection
      navigationScreenDestination="Account Details"
      headerComponent={
        <Text style={{ paddingBottom: 10 }}>Welcome John Smith!</Text>
      }
    />
  );
};

export default Overview;
