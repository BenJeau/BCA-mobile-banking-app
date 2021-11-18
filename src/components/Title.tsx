import React from 'react';
import { TextProps } from 'react-native';
import { Text } from '.';
import { useTheme } from '../hooks';

const Title: React.FC<TextProps> = props => {
  const {
    colors: { text },
  } = useTheme();

  return (
    <Text
      {...props}
      style={[
        {
          color: text,
          fontSize: 25,
          fontFamily: 'Poppins-Medium',
        },
        props.style,
      ]}
    />
  );
};

export default Title;
