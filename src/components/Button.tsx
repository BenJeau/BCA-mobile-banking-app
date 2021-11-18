import React from 'react';
import { Pressable, ViewStyle } from 'react-native';
import { Icon, Text } from '.';
import { useTheme } from '../hooks';

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'link';
  label: string;
  icon?: string;
  onPress?: () => void;
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  label,
  icon,
  onPress,
  style,
}) => {
  const { colors } = useTheme();

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor:
            type === 'primary'
              ? colors.primary
              : type === 'secondary'
              ? colors.text
              : colors.background,
          height: 50,
          borderRadius: 10,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: pressed && type === 'link' ? 0.5 : 1,
          flexDirection: 'row',
        },
        style,
      ]}
      onPress={onPress}
      disabled={!onPress}
      android_ripple={{
        borderless: false,
        color: colors.background,
      }}>
      {icon && (
        <Icon
          name={icon}
          size={20}
          style={{ marginRight: 10 }}
          color={type === 'link' ? colors.text : colors.background}
        />
      )}
      <Text
        style={{
          color:
            type === 'primary'
              ? colors.background
              : type === 'secondary'
              ? colors.background
              : colors.text,
          fontFamily: type === 'link' ? 'Poppins-Medium' : 'Poppins-Bold',
          fontSize: 15,
          textDecorationLine: type === 'link' ? 'underline' : 'none',
          textDecorationColor: colors.text,
          textDecorationStyle: 'solid',
        }}>
        {label}
      </Text>
    </Pressable>
  );
};

export default Button;
