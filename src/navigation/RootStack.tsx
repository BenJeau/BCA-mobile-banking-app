import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  AccountDetails,
  AccountSelection,
  Chatbot,
  Login,
  MobileDeposit,
  TransferAccount,
} from '../screens';
import HomeBottomTabs from './HomeBottomTabs';
import { useTheme } from '../hooks';
import { IconButton } from '../components';
import AuthenticatedBottomTabs from './AuthenticatedBottomTabs';

export type RootStackParamList = {
  HomeBottomTabs: undefined;
  AuthenticatedBottomTabs: undefined;
  Login: undefined;
  Chatbot: undefined;
  'Account Details': undefined;
  'Mobile Deposit': undefined;
  'Account Selection': undefined;
  'Transfer Between Accounts': undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: { fontFamily: 'Poppins-Bold' },
        headerStyle: {
          backgroundColor: `${theme.colors.background}90`,
        },
        headerLeft: ({ tintColor }) => (
          <IconButton
            color={tintColor}
            name="arrow-left-circle-fill"
            size={25}
            style={{ marginRight: 10, marginBottom: 5 }}
            onPress={() => navigation.goBack()}
          />
        ),
        headerShadowVisible: false,
        headerTransparent: true,
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
      }}>
      <Stack.Screen
        name="HomeBottomTabs"
        component={HomeBottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AuthenticatedBottomTabs"
        component={AuthenticatedBottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Chatbot" component={Chatbot} />
      <Stack.Screen name="Account Details" component={AccountDetails} />
      <Stack.Screen name="Mobile Deposit" component={MobileDeposit} />
      <Stack.Screen name="Account Selection" component={AccountSelection} />
      <Stack.Screen
        name="Transfer Between Accounts"
        component={TransferAccount}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
