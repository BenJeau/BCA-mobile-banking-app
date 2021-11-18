import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Linking, StatusBar, View } from 'react-native';

import { Button, Text, Title } from '../components';
import { useChangeNavigationBarColor, useTheme } from '../hooks';

const About: React.FC = () => {
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
          source={require('../assets/images/it-support.png')}
          style={{ width: '100%', height: 300 }}
          resizeMode="contain"
        />
        <View style={{ marginBottom: 40, alignItems: 'center' }}>
          <Title style={{ textAlign: 'center' }}>
            Need Help? Have Questions?
          </Title>
          <Text style={{ textAlign: 'center' }}>
            Feel free to chat, call, or email us!
          </Text>
        </View>
        <View
          style={{
            width: '100%',
          }}>
          <Button
            type="primary"
            icon="chat-voice-fill"
            label="Text our chatbot"
            onPress={() => {
              navigation.navigate('Chatbot');
            }}
          />
          <Button
            type="secondary"
            icon="phone-fill"
            label="+1 (888) 777-6666"
            style={{ marginTop: 10 }}
            onPress={() => {
              Linking.openURL('tel:+18887776666');
            }}
          />
          <Button
            icon="mail-fill"
            label="support@cba.gc.ca"
            type="link"
            onPress={() => {
              Linking.openURL('mailto:support@cba.gc.ca');
            }}
          />
        </View>
      </View>
    </>
  );
};

export default About;
