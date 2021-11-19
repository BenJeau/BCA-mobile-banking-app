import React from 'react';
import { Image, View, ViewStyle } from 'react-native';

import { Text, Title } from '.';

interface InfoImageProps {
  source: any;
  maxHeight?: number;
  title?: string;
  description?: string;
  style?: ViewStyle;
}

const InfoImage: React.FC<InfoImageProps> = ({
  source,
  maxHeight = 300,
  title,
  description,
  style,
}) => {
  return (
    <View style={[{ alignItems: 'center' }, style]}>
      <Image
        source={source}
        style={{ height: maxHeight }}
        resizeMode="contain"
      />
      {title && <Title style={{ textAlign: 'center' }}>{title}</Title>}
      {description && (
        <Text style={{ textAlign: 'center' }}>{description}</Text>
      )}
    </View>
  );
};

export default InfoImage;
