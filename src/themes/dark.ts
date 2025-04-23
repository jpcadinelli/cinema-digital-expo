import { DarkTheme } from '@react-navigation/native';

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#000000',
    text: '#ffffff',
    primary: '#0A84FF',
    card: '#1c1c1e',
  },
};
