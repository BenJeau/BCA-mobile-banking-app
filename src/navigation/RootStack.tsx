import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Chatbot, Login } from '../screens';
import HomeBottomTabs from './HomeBottomTabs';
import { useTheme } from '../hooks';
import { Icon } from '../components';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const RootStack: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        // headerTransparent: true,
        headerTitleStyle: { fontFamily: 'Poppins-Bold' },
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.background,
        headerLeft: ({ tintColor }) => (
          <Pressable
            onPress={() => navigation.goBack()}
            style={({ pressed }) => ({
              marginBottom: 5,
              marginRight: 10,
              borderRadius: 25,
              opacity: pressed ? 0.5 : 1,
              backgroundColor: pressed ? tintColor : '',
            })}>
            <Icon name="arrow-left-circle-fill" color={tintColor} size={30} />
          </Pressable>
        ),
      }}>
      <Stack.Screen
        name="HomeBottomTabs"
        component={HomeBottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Chatbot" component={Chatbot} />
    </Stack.Navigator>
  );
};

export default RootStack;
