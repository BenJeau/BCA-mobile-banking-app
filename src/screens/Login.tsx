import React from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/elements';

import { Button, InfoImage, Text, TextEdit } from '../components';
import { useChangeNavigationBarColor, useTheme } from '../hooks';

const Login: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();

  useChangeNavigationBarColor(theme.colors.background, theme.dark);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: headerHeight,
      }}>
      <InfoImage
        source={
          theme.dark
            ? require('../assets/images/coins.png')
            : require('../assets/images/light/coins.png')
        }
        maxHeight={250}
        title="Enter your credentials"
        description="Provide us you BCA card number and password"
      />

      <View style={{ marginVertical: 40 }}>
        <TextEdit icon="bank-card-line" label="Card Number" />
        <TextEdit
          icon="key-2-line"
          label="Password"
          style={{ marginTop: 10 }}
        />
      </View>

      <Button
        label="Login"
        icon="shield-keyhole-fill"
        onPress={() => {
          navigation.reset({
            routes: [
              { name: 'HomeBottomTabs' },
              { name: 'AuthenticatedBottomTabs' },
            ],
          });
        }}
      />

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text>Having trouble accessing your account?</Text>
        <Button type="link" label="Chat with us" />
      </View>
    </ScrollView>
  );
};

export default Login;
