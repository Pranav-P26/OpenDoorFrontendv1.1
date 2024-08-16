import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#386641', // Dark green
      light: '#6A994E', // Medium green
      dark: '#2A4D31', // Darker shade of the main color
    },
    secondary: {
      main: '#BC4749', // Red
      light: '#C96E70', // Lighter shade of red
      dark: '#8F3638', // Darker shade of red
    },
    background: {
      default: '#F2E8CF', // Light beige (background color)
      paper: '#FFFFFF', // White for paper elements
    },
    text: {
      primary: '#386641', // Dark green for primary text
      secondary: '#6A994E', // Medium green for secondary text
    },
    error: {
      main: '#BC4749', // Red (reusing the secondary color for error)
    },
    warning: {
      main: '#A7C957', // Light green
    },
    info: {
      main: '#6A994E', // Medium green
    },
    success: {
      main: '#386641', // Dark green (reusing the primary color for success)
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      color: '#386641', // Dark green
    },
    h2: {
      color: '#386641', // Dark green
    },
    h3: {
      color: '#6A994E', // Medium green
    },
    h4: {
      color: '#6A994E', // Medium green
    },
    h5: {
      color: '#386641', // Dark green
    },
    h6: {
      color: '#386641', // Dark green
    },
    subtitle1: {
      color: '#6A994E', // Medium green
    },
    subtitle2: {
      color: '#6A994E', // Medium green
    },
    body1: {
      color: '#386641', // Dark green
    },
    body2: {
      color: '#6A994E', // Medium green
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

export default theme;