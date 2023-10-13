// Theme.js

import { createTheme } from '@mui/material/styles';

// Defina as cores para o tema claro
const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#2196F3', // Cor primária clara
    },
    secondary: {
      main: '#FF9800', // Cor secundária clara
    },
    text: {
      primary: '#000000', // Cor do texto primária (preto) para o tema claro
    },
  },
});

// Defina as cores para o tema escuro
const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#2196F3', // Cor primária escura
    },
    secondary: {
      main: '#FF9800', // Cor secundária escura
    },
    text: {
      primary: '#FFFFFF', // Cor do texto primária (branco) para o tema escuro
    },
  },
});

export { lightTheme, darkTheme };
