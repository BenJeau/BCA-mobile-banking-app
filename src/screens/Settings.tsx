import React from 'react';
import { ScrollView, View } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';

import { BasicListItem, Icon, Text } from '../components';
import { useChangeNavigationBarColor, useTheme } from '../hooks';

const Settings: React.FC = () => {
  const theme = useTheme();
  const headerHeight = useHeaderHeight();

  useChangeNavigationBarColor(theme.colors.text, theme.dark);

  return (
    <ScrollView contentContainerStyle={{ paddingTop: headerHeight }}>
      <BasicListItem text="Change Language" />
      <BasicListItem text="Leave Feedback" />
      <BasicListItem text="Terms of Service" />
      <BasicListItem text="Privacy Policy" />
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
