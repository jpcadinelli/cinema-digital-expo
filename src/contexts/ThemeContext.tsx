import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Theme } from '@react-navigation/native';
import { lightTheme } from '../themes/light';
import { darkTheme } from '../themes/dark';

type ThemeType = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  themeName: ThemeType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  themeName: 'light',
  toggleTheme: () => {},
});

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [themeName, setThemeName] = useState<ThemeType>('light');
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const saveTheme = async (themeToSave: ThemeType) => {
    try {
      await AsyncStorage.setItem('@theme', themeToSave);
    } catch (e) {
      console.error('Erro ao salvar o tema:', e);
    }
  };

  const toggleTheme = () => {
    const newThemeName: ThemeType = themeName === 'light' ? 'dark' : 'light';
    const newTheme = newThemeName === 'light' ? lightTheme : darkTheme;

    setThemeName(newThemeName);
    setTheme(newTheme);
    saveTheme(newThemeName);
  };

  useEffect(() => {
    const getSavedTheme = async () => {
      const saved = await AsyncStorage.getItem('@theme');
      if (saved === 'dark') {
        setThemeName('dark');
        setTheme(darkTheme);
      }
    };
    getSavedTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
