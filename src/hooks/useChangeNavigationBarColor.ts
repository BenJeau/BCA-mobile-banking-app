import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

const useChangeNavigationBarColor = (color: string, isDark: boolean) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused && changeNavigationBarColor(color, !isDark, true);
  }, [color, isDark, isFocused]);
};

export default useChangeNavigationBarColor;
