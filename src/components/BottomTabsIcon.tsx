import React from 'react';

import Icon from './Icon';

interface BottomTabsIconProps {
  focused: boolean;
  name: string;
  color: string;
  size: number;
}

const BottomTabsIcon: React.FC<BottomTabsIconProps> = ({
  name,
  focused,
  color,
  size,
}) => (
  <Icon
    name={`${name}-${focused ? 'fill' : 'line'}`}
    size={size}
    color={color}
  />
);

export default BottomTabsIcon;
