/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material';

export const themeSettings = (mode: string) => ({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
        primary: {
          main: '#f2f2f2',
        },
        secondary: {
          main: '#f2f2f2',
        },
        neutral: {
          dark: '#f2f2f2',
          main: '#f2f2f2',
          light: '#f2f2f2',
        },
        background: {
          default: '#f2f2f2',
        },
      }
      : {
        primary: {
          main: '#f2f2f2',
        },
        secondary: {
          main: '#f2f2f2',
        },
        neutral: {
          dark: '#f2f2f2',
          main: '#f2f2f2',
          light: '#f2f2f2',
        },
        background: {
          default: '#fcfcfc',
        },
      }),
  },
});

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    [],
  );

  const theme = useMemo(() => createTheme(themeSettings(mode) as ThemeOptions), [mode]);
  return [theme, colorMode] as const;
};