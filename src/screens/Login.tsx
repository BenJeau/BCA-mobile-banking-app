import React, { useRef } from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/elements';

import { Button, InfoImage, Text, TextEdit } from '../components';
import { useChangeNavigationBarColor, useTheme } from '../hooks';

const Login: React.FC = () => {
  const cardNumberRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const theme = useTheme();
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();

  useChangeNavigationBarColor(theme.colors.background, theme.dark);

  const nextScreen = () =>
    navigation.reset({
      routes: [{ name: 'HomeBottomTabs' }, { name: 'AuthenticatedBottomTabs' }],
    });

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
        <TextEdit
          ref={cardNumberRef}
          icon="bank-card-line"
          label="Card Number"
          textInputProps={{
            returnKeyType: 'next',
            onSubmitEditing: () => passwordRef.current?.focus(),
            blurOnSubmit: false,
            keyboardType: 'number-pad',
          }}
        />
        <TextEdit
          ref={passwordRef}
          icon="key-2-line"
          label="Password"
          style={{ marginTop: 10 }}
          textInputProps={{
            secureTextEntry: true,
            onSubmitEditing: nextScreen,
          }}
        />
      </View>

      <Button label="Login" icon="shield-keyhole-fill" onPress={nextScreen} />

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text>Having trouble accessing your account?</Text>
        <Button type="link" label="Chat with us" />
      </View>
    </ScrollView>
  );
};

export default Login;
