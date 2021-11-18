import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, StatusBar } from 'react-native';

import { Button, Text, Title } from '../components';
import { useChangeNavigationBarColor, useTheme } from '../hooks';

const Home: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  useChangeNavigationBarColor(theme.colors.text, theme.dark);

  return (
    <>
      <StatusBar backgroundColor={theme.colors.background} animated />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          padding: 20,
          paddingTop: 0,
        }}>
        <Image
          source={require('../assets/images/piggy-bank.png')}
          style={{ width: '100%', height: 300 }}
          resizeMode="contain"
        />
        <View style={{ marginBottom: 40, alignItems: 'center' }}>
          <Title style={{ textAlign: 'center' }}>Welcome to BCA Mobile</Title>
          <Text style={{ textAlign: 'center' }}>
            Please login to manage your bank account(s) and monitor its
            activities
          </Text>
        </View>
        <View
          style={{
            width: '100%',
          }}>
          <Button
            icon="shield-keyhole-fill"
            label="Sign In"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
          <Button
            label="Contact Us"
            type="link"
            onPress={() => {
              navigation.navigate('Support');
            }}
          />
        </View>
      </View>
    </>
  );
};

export default Home;
