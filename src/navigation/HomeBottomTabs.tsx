import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Settings, Home, Support } from '../screens';
import { Icon } from '../components';
import { useTheme } from '../hooks';

interface BottomTabsIconProps {
  focused: boolean;
  name: string;
  color: string;
  size: number;
}

const BottomTabsIcon: React.FC<BottomTabsIconProps> = ({
  name,
  focused,
  color,
  size,
}) => (
  <Icon
    name={`${name}-${focused ? 'fill' : 'line'}`}
    size={size}
    color={color}
  />
);

const Tab = createBottomTabNavigator();

const HomeBottomTabs: React.FC = () => {
  const theme = useTheme();

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
      }}>
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
