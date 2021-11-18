import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useTheme } from '../hooks';

const Provider: React.FC = ({ children }) => {
  const theme = useTheme();

  return <NavigationContainer theme={theme}>{children}</NavigationContainer>;
};

export default Provider;
