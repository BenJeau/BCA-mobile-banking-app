import React from 'react';
import { Pressable, ViewStyle } from 'react-native';

import { Icon } from '.';

interface IconButtonProps {
  name: string;
  color?: string;
  size?: number;
  style?: ViewStyle;
  onPress: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  color,
  name,
  onPress,
  size,
  style,
}) => (
  <Pressable
    onPress={onPress}
    android_ripple={{ color, borderless: true }}
    style={style}>
    <Icon name={name} color={color} size={size} />
  </Pressable>
);

export default IconButton;
