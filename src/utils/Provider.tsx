import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useTheme } from '../hooks';
import { StatusBar } from 'react-native';

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
