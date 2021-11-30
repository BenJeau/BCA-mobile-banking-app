import React from 'react';
import { TextProps } from 'react-native';

import { Text } from '.';
import { useTheme } from '../hooks';

const Title: React.FC<TextProps> = props => {
  const theme = useTheme();

  return (
    <Text
      {...props}
      style={[
        {
          color: theme.colors.text,
          fontSize: 25,
          fontFamily: 'Poppins-Medium',
        },
        props.style,
      ]}
    />
  );
};

export default Title;
