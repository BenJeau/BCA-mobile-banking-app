import React from 'react';
import { View } from 'react-native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Theme } from '@react-navigation/native';

export { default as RootStack } from './RootStack';

export const bottomTabNavigationOptions = (
  theme: Theme,
): BottomTabNavigationOptions => ({
  headerTransparent: true,
  headerTitleStyle: { fontFamily: 'Poppins-Bold' },
  tabBarLabelStyle: { fontFamily: 'Poppins-Bold' },
  tabBarInactiveTintColor: `${theme.colors.background}90`,
  tabBarActiveTintColor: theme.colors.background,
  tabBarStyle: {
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderTopWidth: 0,
    backgroundColor: theme.colors.text,
  },
  headerBackground: () => (
    <View
      style={{
        backgroundColor: `${theme.colors.background}90`,
        height: 50,
      }}
    />
  ),
});
