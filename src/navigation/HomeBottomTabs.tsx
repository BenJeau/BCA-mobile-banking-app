import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Settings, Home, Support } from '../screens';
import { BottomTabsIcon } from '../components';
import { useTheme } from '../hooks';
import { bottomTabNavigationOptions } from '.';

export type HomeBottomTabsParamList = {
  Home: undefined;
  Support: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<HomeBottomTabsParamList>();

const HomeBottomTabs: React.FC = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator screenOptions={bottomTabNavigationOptions(theme)}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: props => (
            <BottomTabsIcon name="home-smile-2" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Support"
        component={Support}
        options={{
          tabBarIcon: props => (
            <BottomTabsIcon name="chat-smile-3" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: props => <BottomTabsIcon name="settings-3" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomTabs;
