import React, { useState, useEffect, forwardRef, useRef } from 'react';
import {
  TextInput,
  View,
  Pressable,
  Animated,
  Easing,
  TextInputProps,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import { useCombinedRefs } from '../hooks';
import { Icon } from '.';

interface TextEditProp {
  label: string;
  icon: string;
  placeholder?: string;
  textInputProps?: TextInputProps;
  style?: ViewStyle;
}

const TextEdit = forwardRef(
  (
    { label, icon, textInputProps, placeholder, style }: TextEditProp,
    ref?: React.Ref<TextInput>,
  ) => {
    const theme = useTheme();

    const innerRef = useRef<TextInput>(null);
    const combinedRef = useCombinedRefs(ref, innerRef);

    const [active, setActive] = useState(false);
    const [componentColor] = useState(new Animated.Value(0));

    useEffect(() => {
      Animated.timing(componentColor, {
        toValue: active ? 1 : 0,
        duration: active ? 100 : 400,
        useNativeDriver: false,
        easing: active ? Easing.in(Easing.ease) : Easing.out(Easing.ease),
      }).start();
    }, [active, componentColor]);

    return (
      <Pressable
        style={[styles.container, style]}
        onPress={() => innerRef.current?.focus()}>
        <View>
          <Animated.Text
            style={{
              ...styles.label,
              color: theme.colors.text,
            }}>
            {label}
          </Animated.Text>

          <View style={styles.secondLine}>
            <View style={styles.textInputIcon}>
              <Icon name={icon} size={25} color={theme.colors.text} />
            </View>

            <TextInput
              ref={combinedRef}
              style={{
                ...styles.textInput,
                color: theme.colors.background,
                backgroundColor: theme.colors.card,
              }}
              placeholderTextColor={`${theme.colors.background}70`}
              selectionColor={`${theme.colors.background}70`}
              onBlur={() => setActive(false)}
              onFocus={() => setActive(true)}
              placeholder={placeholder}
              {...textInputProps}
            />
          </View>
        </View>
      </Pressable>
    );
  },
);

export default TextEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    marginLeft: 50,
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
  secondLine: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 0,
    marginBottom: 3,
    marginTop: 5,
  },
  textInput: {
    flex: 1,
    padding: 0,
    width: '100%',
    fontFamily: 'Poppins-Regular',
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 5,
  },
  textInputIcon: {
    marginHorizontal: 10,
  },
  underline: {
    height: 1,
  },
});
