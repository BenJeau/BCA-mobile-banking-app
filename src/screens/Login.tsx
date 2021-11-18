import React from 'react';
import { StatusBar, View } from 'react-native';

import { Text } from '../components';
import { useChangeNavigationBarColor, useTheme } from '../hooks';

const Login: React.FC = () => {
  const theme = useTheme();

  useChangeNavigationBarColor(theme.colors.background, theme.dark);

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.primary}
        animated
        barStyle={'dark-content'}
      />
      <View>
        <Text>Hello to login</Text>
      </View>
    </>
  );
};

export default Login;
