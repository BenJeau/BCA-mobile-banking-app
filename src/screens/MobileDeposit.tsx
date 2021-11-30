import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/elements';
import { RNCamera } from 'react-native-camera';

import {
  AccountOverview,
  Button,
  Icon,
  Text,
  TextEdit,
  Title,
} from '../components';
import { useChangeNavigationBarColor, useTheme } from '../hooks';
import { accountsData, accountType, getAccount } from '../data/accounts';

interface PhotoButtonProps {
  label: string;
  style?: ViewStyle;
}

const PhotoButton: React.FC<PhotoButtonProps> = ({ label, style }) => {
  const theme = useTheme();
  const [isCameraActive, setIsCameraActive] = useState(false);

  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.text,
          borderRadius: 10,
          elevation: 5,
          overflow: 'hidden',
        },
        style,
      ]}>
      <Pressable
        onPress={() => setIsCameraActive(prev => !prev)}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 150,
        }}
        android_ripple={{
          color: theme.colors.background,
        }}>
        {isCameraActive ? (
          <RNCamera
            style={StyleSheet.absoluteFill}
            type={RNCamera.Constants.Type.back}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            captureAudio={false}
          />
        ) : (
          <>
            <Icon
              name="camera-3-fill"
              size={40}
              color={theme.colors.background}
            />
            <Text
              style={{
                color: theme.colors.background,
                fontFamily: 'Poppins-Medium',
              }}>
              {label}
            </Text>
          </>
        )}
      </Pressable>
    </View>
  );
};

const MobileDeposit: React.FC = ({
  route: { params: { id } = { id: accountsData[accountType.checking][0].id } },
}) => {
  const theme = useTheme();
  const headerHeight = useHeaderHeight();
  const navigation = useNavigation();

  useChangeNavigationBarColor(theme.colors.background, theme.dark);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: headerHeight,
      }}>
      <Title>Cheque Amount</Title>
      <TextEdit
        textInputProps={{
          placeholder: 'Enter the amount on the cheque',
          keyboardType: 'numeric',
        }}
      />
      <Text style={{ marginTop: 5 }}>Deposit limit $100,000.00</Text>
      <Title style={{ marginTop: 25 }}>Select Account</Title>
      <AccountOverview
        {...getAccount(id)}
        onPress={() => navigation.navigate('Account Selection')}
      />
      <Title style={{ marginTop: 25, marginBottom: 5 }}>Cheque Photos</Title>
      <View>
        <PhotoButton label="Front of cheque" />
        <PhotoButton label="Back of cheque" style={{ marginTop: 10 }} />
      </View>
      <Button
        label="Deposit"
        icon="money-dollar-circle-fill"
        style={{ marginVertical: 25 }}
        onPress={() => navigation.navigate('Overview')}
      />
    </ScrollView>
  );
};

export default MobileDeposit;
