import React from 'react';

import { AccountSelection as AS, Text } from '../components';
import { useChangeNavigationBarColor, useTheme } from '../hooks';

const AccountSelection: React.FC = () => {
  const theme = useTheme();
  useChangeNavigationBarColor(theme.colors.background, theme.dark);

  return (
    <AS
      navigationScreenDestination="Mobile Deposit"
      headerComponent={
        <Text style={{ paddingBottom: 10 }}>Select an account</Text>
      }
    />
  );
};

export default AccountSelection;
