import React from 'react';
import { TextProps, Text as RNText } from 'react-native';

import { useTheme } from '../hooks';

const Text: React.FC<TextProps> = props => {
  const {
    colors: { text },
  } = useTheme();

  return (
    <RNText
      {...props}
      style={[
        {
          color: text,
          fontFamily: 'Poppins-Regular',
          marginBottom: -2,
        },
        props.style,
      ]}
    />
  );
};

export default Text;
