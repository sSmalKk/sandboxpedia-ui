// ThemeSwitcher.js

import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';

function ThemeSwitcher() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Verifique o localStorage para determinar se o tema é escuro
  useEffect(() => {
    const isDark = localStorage.getItem('isDarkTheme');
    if (isDark) {
      setIsDarkTheme(JSON.parse(isDark));
    }
  }, []);

  // Alterne entre temas claro e escuro
  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);

    // Salve a preferência no localStorage
    localStorage.setItem('isDarkTheme', JSON.stringify(newTheme));
  };

  return (
    <Button onClick={toggleTheme}>
      {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    </Button>
  );
}

export default ThemeSwitcher;
