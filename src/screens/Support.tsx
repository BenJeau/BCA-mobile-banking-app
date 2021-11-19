import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Linking, View } from 'react-native';

import { Button, InfoImage } from '../components';
import { useChangeNavigationBarColor, useTheme } from '../hooks';

const About: React.FC = () => {
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
            ? require('../assets/images/it-support.png')
            : require('../assets/images/light/it-support.png')
        }
        title="Need Help? Have Questions?"
        description="Feel free to chat, call, or email us!"
      />
      <View
        style={{
          width: '100%',
          marginTop: 40,
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
          style={{ marginTop: 15 }}
          onPress={() => {
            Linking.openURL('mailto:support@cba.gc.ca');
          }}
        />
      </View>
    </View>
  );
};

export default About;
