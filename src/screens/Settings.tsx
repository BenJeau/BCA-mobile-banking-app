import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';

import { Icon, Text } from '../components';
import { useChangeNavigationBarColor, useTheme } from '../hooks';

interface SettingsItemProps {
  text: string;
}

const SettingsItem: React.FC<SettingsItemProps> = ({ text }) => {
  const theme = useTheme();
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: `${theme.colors.text}50`,
      }}
      android_ripple={{
        borderless: false,
        color: theme.colors.text,
      }}>
      <Text>{text}</Text>
      <Icon name="arrow-right-s-line" size={25} color={theme.colors.text} />
    </Pressable>
  );
};

const Settings: React.FC = () => {
  const theme = useTheme();
  const headerHeight = useHeaderHeight();

  useChangeNavigationBarColor(theme.colors.text, theme.dark);

  return (
    <ScrollView contentContainerStyle={{ paddingTop: headerHeight }}>
      <SettingsItem text="Change Language" />
      <SettingsItem text="Leave Feedback" />
      <SettingsItem text="Terms of Service" />
      <SettingsItem text="Privacy Policy" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 80,
        }}>
        <Text style={{ fontFamily: 'Poppins-Bold', marginBottom: -5 }}>
          Version 1.0.1
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>Made in Canada with</Text>
          <Icon
            name="heart-fill"
            size={16}
            color={theme.colors.notification}
            style={{ marginLeft: 5 }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Settings;
