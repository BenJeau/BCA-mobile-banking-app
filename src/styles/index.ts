import { Theme } from '@react-navigation/native';

const colors = {
  green: {
    light: '#ace8bb',
    default: '#457162',
    dark: '#003d2b',
  },
  yellow: {
    light: '#ffdf94',
    default: '#f8c244',
    dark: '#db9911',
  },
};

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: colors.yellow.default,
    background: colors.green.dark,
    card: colors.green.light,
    text: colors.green.light,
    border: '#bdbdbd',
    notification: '#d41c3e',
  },
};

export const LightTheme: Theme = {
  dark: false,
  colors: {
    primary: colors.yellow.light,
    background: colors.green.light,
    card: colors.green.default,
    text: colors.green.dark,
    border: '#bdbdbd',
    notification: '#d41c3e',
  },
};
