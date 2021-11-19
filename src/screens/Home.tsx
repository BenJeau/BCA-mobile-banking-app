import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import { Button, InfoImage } from '../components';
import { useChangeNavigationBarColor, useTheme } from '../hooks';

const Home: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  useChangeNavigationBarColor(theme.colors.text, theme.dark);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: 20,
        paddingTop: 0,
      }}>
      <InfoImage
        source={
          theme.dark
            ? require('../assets/images/piggy-bank.png')
            : require('../assets/images/light/piggy-bank.png')
        }
        title="Welcome to BCA Mobile"
        description="Please login to manage your bank account(s) and monitor its activities"
      />
      <View
        style={{
          width: '100%',
          marginTop: 40,
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
          style={{ marginTop: 15 }}
          onPress={() => {
            navigation.navigate('Support');
          }}
        />
      </View>
    </View>
  );
};

export default Home;
