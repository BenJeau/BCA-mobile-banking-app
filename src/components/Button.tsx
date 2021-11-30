import React from 'react';
import { Pressable, TextStyle, ViewStyle } from 'react-native';

import { Icon, Text } from '.';
import { useTheme } from '../hooks';

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'link';
  label: string;
  icon?: string;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  label,
  icon,
  onPress,
  style,
  textStyle,
}) => {
  const theme = useTheme();

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor:
            type === 'primary'
              ? theme.colors.primary
              : type === 'secondary'
              ? theme.colors.text
              : theme.colors.background,
          height: type === 'link' ? undefined : 50,
          borderRadius: 10,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: pressed && type === 'link' ? 0.5 : 1,
          flexDirection: 'row',
          elevation: type !== 'link' ? 5 : 0,
        },
        style,
      ]}
      onPress={onPress}
      disabled={!onPress}
      android_ripple={{
        borderless: false,
        color: theme.colors.background,
      }}>
      {icon && (
        <Icon
          name={icon}
          size={20}
          style={{ marginRight: 10 }}
          color={type === 'link' ? theme.colors.text : theme.colors.background}
        />
      )}
      <Text
        style={[
          {
            color:
              type === 'primary'
                ? theme.colors.background
                : type === 'secondary'
                ? theme.colors.background
                : theme.colors.text,
            fontFamily: type === 'link' ? 'Poppins-Medium' : 'Poppins-Bold',
            fontSize: 15,
            textDecorationLine: type === 'link' ? 'underline' : 'none',
            textDecorationColor: theme.colors.text,
            textDecorationStyle: 'solid',
          },
          textStyle,
        ]}>
        {label}
      </Text>
    </Pressable>
  );
};

export default Button;
