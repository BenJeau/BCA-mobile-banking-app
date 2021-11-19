import React, { useRef, useState } from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import dayjs, { Dayjs } from 'dayjs';
import calendar from 'dayjs/plugin/calendar';

dayjs.extend(calendar);

import { IconButton, InfoImage, Text } from '../components';
import { useChangeNavigationBarColor, useTheme } from '../hooks';

const chatbotResponses = [
  'Have you tried restarting your phone?',
  'Make sure you entered the right password and bank card number.',
  'Hello, nice to meet you!',
  'It would be easier if you contact us.',
  'The BCA mobile application can do everything.',
  'This application is very useful, please use it correctly',
];

interface Message {
  content: string;
  time: Dayjs;
  chatbot: boolean;
}

const Chatbot: React.FC = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollViewRef = useRef<ScrollView>(null);

  const theme = useTheme();
  const headerHeight = useHeaderHeight();
  useChangeNavigationBarColor(theme.colors.text, theme.dark);

  const addMessage = () => {
    setMessages(prev => [
      ...prev,
      { content: message, time: dayjs(), chatbot: false },
      {
        content:
          chatbotResponses[Math.floor(Math.random() * chatbotResponses.length)],
        time: dayjs(),
        chatbot: true,
      },
    ]);
    setMessage('');
    scrollViewRef.current?.scrollToEnd();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{
          justifyContent: 'space-between',
          paddingTop: headerHeight,
        }}
        style={{
          flexGrow: 1,
        }}>
        <InfoImage
          source={
            theme.dark
              ? require('../assets/images/question.png')
              : require('../assets/images/light/question.png')
          }
          title="Ask questions"
          description="Our chatbot is able to answer most questions"
          style={{
            paddingVertical: 40,
          }}
        />
        <View style={{ padding: 10 }}>
          {messages.length > 0 && (
            <View style={{ alignItems: 'center', opacity: 0.5 }}>
              <Text>{messages[0].time.calendar()}</Text>
            </View>
          )}
          {messages.map(({ content, chatbot }, index) => (
            <View
              key={index}
              style={{
                backgroundColor: chatbot
                  ? `${theme.colors.text}30`
                  : theme.colors.text,
                borderRadius: 10,
                borderBottomEndRadius: chatbot ? 10 : 0,
                borderBottomStartRadius: chatbot ? 0 : 10,
                padding: 10,
                marginTop: 10,
                alignSelf: chatbot ? 'flex-start' : 'flex-end',
              }}>
              <Text
                style={{
                  color: chatbot ? theme.colors.text : theme.colors.background,
                }}>
                {content}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View
        style={{
          backgroundColor: theme.colors.text,
          width: '100%',
          padding: 15,
          borderTopStartRadius: 10,
          borderTopEndRadius: 10,
          elevation: 5,
        }}>
        <View
          style={{
            backgroundColor: `${theme.colors.background}50`,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <TextInput
            style={{
              paddingHorizontal: 0,
              paddingVertical: 5,
              flexGrow: 1,
              color: theme.colors.background,
              fontFamily: 'Poppins-Regular',
              includeFontPadding: false,
            }}
            placeholderTextColor={`${theme.colors.background}70`}
            selectionColor={`${theme.colors.background}70`}
            placeholder="Send question"
            multiline
            returnKeyType="send"
            value={message}
            onChangeText={setMessage}
            blurOnSubmit={false}
            onBlur={addMessage}
            onFocus={() => scrollViewRef.current?.scrollToEnd()}
          />
          <IconButton
            name="send-plane-fill"
            color={theme.colors.background}
            size={20}
            onPress={addMessage}
          />
        </View>
      </View>
    </View>
  );
};

export default Chatbot;
