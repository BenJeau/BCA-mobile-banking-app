import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import { Deposit, Overview, Transfers } from '../screens';
import { BottomTabsIcon, IconButton, Text } from '../components';
import { useTheme } from '../hooks';
import { bottomTabNavigationOptions, getTabItemOptions } from '.';

export type AuthenticatedBottomTabsParamList = {
  Overview: undefined;
  Deposit: undefined;
  Transfers: undefined;
};

const Tab = createBottomTabNavigator<AuthenticatedBottomTabsParamList>();

const AuthenticatedBottomTabs: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        ...bottomTabNavigationOptions(theme),
        headerRight: () => (
          <View style={{ flexDirection: 'row' }}>
            <Text>Logout</Text>
            <IconButton
              color={theme.colors.text}
              name="logout-circle-line"
              size={20}
              onPress={() => navigation.navigate('HomeBottomTabs')}
              style={{ marginRight: 15, marginLeft: 10 }}
            />
          </View>
        ),
      }}>
      <Tab.Screen
        name="Overview"
        component={Overview}
        options={{
          tabBarIcon: props => <BottomTabsIcon name="dashboard-3" {...props} />,
        }}
      />
      <Tab.Screen
        name="Deposit"
        component={Deposit}
        options={{
          tabBarIcon: props => <BottomTabsIcon name="camera-3" {...props} />,
        }}
      />
      <Tab.Screen
        name="Transfers"
        component={Transfers}
        options={{
          tabBarIcon: props => (
            <BottomTabsIcon name="arrow-left-right" {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthenticatedBottomTabs;
