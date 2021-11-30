import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { useTheme } from '../hooks';

const Provider: React.FC = ({ children }) => {
  const theme = useTheme();

  return (
    <NavigationContainer theme={theme}>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
      />
      {children}
    </NavigationContainer>
  );
};

export default Provider;
