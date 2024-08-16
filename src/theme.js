// theme.js
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#386641',
      light: '#6A994E',
      dark: '#2A4D31',
    },
    secondary: {
      main: '#BC4749',
      light: '#C96E70',
      dark: '#8F3638',
    },
    background: {
      default: '#F2E8CF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#386641',
      secondary: '#6A994E',
    },
    error: {
      main: '#BC4749',
    },
    warning: {
      main: '#A7C957',
    },
    info: {
      main: '#6A994E',
    },
    success: {
      main: '#386641',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      color: '#386641',
    },
    h2: {
      color: '#386641',
    },
    h3: {
      color: '#6A994E',
    },
    h4: {
      color: '#6A994E',
    },
    h5: {
      color: '#386641',
    },
    h6: {
      color: '#386641',
    },
    subtitle1: {
      color: '#6A994E',
    },
    subtitle2: {
      color: '#6A994E',
    },
    body1: {
      color: '#386641',
    },
    body2: {
      color: '#6A994E',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        containedPrimary: {
          backgroundColor: '#386641',
          '&:hover': {
            backgroundColor: '#2A4D31',
          },
        },
        containedSecondary: {
          backgroundColor: '#BC4749',
          '&:hover': {
            backgroundColor: '#8F3638',
          },
        },
        outlinedPrimary: {
          borderColor: '#386641',
          color: '#386641',
        },
        outlinedSecondary: {
          borderColor: '#BC4749',
          color: '#BC4749',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          borderRadius: 12,
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6A994E',
      light: '#8FBC8F',
      dark: '#4A7A4A',
    },
    secondary: {
      main: '#D66A6A',
      light: '#E6A2A2',
      dark: '#B54B4B',
    },
    background: {
      default: '#1E1E1E',
      paper: '#2D2D2D',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
    error: {
      main: '#FF6B6B',
    },
    warning: {
      main: '#FFD166',
    },
    info: {
      main: '#4ECDC4',
    },
    success: {
      main: '#6A994E',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      color: '#FFFFFF',
    },
    h2: {
      color: '#FFFFFF',
    },
    h3: {
      color: '#B0B0B0',
    },
    h4: {
      color: '#B0B0B0',
    },
    h5: {
      color: '#FFFFFF',
    },
    h6: {
      color: '#FFFFFF',
    },
    subtitle1: {
      color: '#B0B0B0',
    },
    subtitle2: {
      color: '#B0B0B0',
    },
    body1: {
      color: '#FFFFFF',
    },
    body2: {
      color: '#B0B0B0',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        containedPrimary: {
          backgroundColor: '#6A994E',
          '&:hover': {
            backgroundColor: '#4A7A4A',
          },
        },
        containedSecondary: {
          backgroundColor: '#D66A6A',
          '&:hover': {
            backgroundColor: '#B54B4B',
          },
        },
        outlinedPrimary: {
          borderColor: '#6A994E',
          color: '#6A994E',
        },
        outlinedSecondary: {
          borderColor: '#D66A6A',
          color: '#D66A6A',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#2D2D2D',
          borderRadius: 12,
        },
      },
    },
  },
});

export { lightTheme, darkTheme };