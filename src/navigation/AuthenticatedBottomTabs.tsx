import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import { Overview, Transfers } from '../screens';
import { BottomTabsIcon, IconButton } from '../components';
import { useTheme } from '../hooks';

const Tab = createBottomTabNavigator();

const AuthenticatedBottomTabs: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
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
              backgroundColor: theme.colors.background,
              opacity: 0.7,
              height: 50,
            }}
          />
        ),
        headerRight: () => (
          <IconButton
            color={theme.colors.text}
            name="logout-circle-line"
            size={20}
            onPress={() => navigation.navigate('HomeBottomTabs')}
            style={{ marginRight: 15 }}
          />
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
