import React from 'react';
import { Pressable, ViewStyle } from 'react-native';

import { Icon, Text } from '.';
import { useTheme } from '../hooks';

interface BasicListItemProps {
  text: string;
  style?: ViewStyle;
}

const BasicListItem: React.FC<BasicListItemProps> = ({ text, style }) => {
  const theme = useTheme();

  return (
    <Pressable
      style={[
        {
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 15,
          borderBottomWidth: 1,
          borderColor: `${theme.colors.text}50`,
        },
        style,
      ]}
      android_ripple={{
        borderless: false,
        color: theme.colors.text,
      }}>
      <Text>{text}</Text>
      <Icon name="arrow-right-s-line" size={25} color={theme.colors.text} />
    </Pressable>
  );
};

export default BasicListItem;
