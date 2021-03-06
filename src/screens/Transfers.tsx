import React from 'react';
import { View } from 'react-native';

import { Button, InfoImage } from '../components';
import { useChangeNavigationBarColor, useTheme } from '../hooks';
import { useNavigation } from '@react-navigation/native';

const Transfer: React.FC = () => {
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
            ? require('../assets/images/transfer.png')
            : require('../assets/images/light/transfer.png')
        }
        maxHeight={250}
        title="Transfer money"
        description="Select a way to transfer money"
      />
      <View
        style={{
          width: '100%',
          marginTop: 40,
        }}>
        <Button
          label="Transfer Between Accounts"
          onPress={() => navigation.navigate('Transfer Between Accounts')}
        />
        <Button
          label="E-Transfer"
          style={{
            marginTop: 10,
          }}
          type="secondary"
          onPress={() => navigation.navigate('Overview')}
        />
      </View>
    </View>
  );
};

export default Transfer;
