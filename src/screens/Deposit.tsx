import React from 'react';
import { View } from 'react-native';

import { Button, InfoImage, Text } from '../components';
import { useChangeNavigationBarColor, useTheme } from '../hooks';
import { useNavigation } from '@react-navigation/native';

const Deposit: React.FC = () => {
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
            ? require('../assets/images/camera.png')
            : require('../assets/images/light/camera.png')
        }
        maxHeight={250}
        title="Deposit your cheques"
        description="Simply take a picture of your cheque!"
      />
      <View
        style={{
          width: '100%',
          marginTop: 40,
        }}>
        <Button
          label="Deposit Cheque"
          icon="money-dollar-circle-fill"
          onPress={() => navigation.navigate('Mobile Deposit')}
        />
        <Text
          style={{ marginTop: 15, textAlign: 'center', paddingHorizontal: 5 }}>
          By deposing this cheque via this mobile application, you agree to the
          terms and conditions of this feature
        </Text>
      </View>
    </View>
  );
};

export default Deposit;
