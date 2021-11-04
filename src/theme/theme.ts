import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  spacing: 14,
  zIndex: {
    drawer: 1
  },
  palette: {
    primary: {
      main: '#3a86ff',
      dark: '#8338ec',
      light: '#fb5607',
    },
    secondary: {
      main: '#ff006e',
      light: '#340062',
      dark: '#5f0f40',

    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#e9ecef',
      secondary: '#333333',
    },
  },
});

export default theme;
