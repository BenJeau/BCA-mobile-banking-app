import { useColorScheme } from 'react-native';
import { DarkTheme, LightTheme } from '../styles';

const useTheme = () => {
  const scheme = useColorScheme();

  return scheme === 'dark' ? DarkTheme : LightTheme;
};

export default useTheme;
