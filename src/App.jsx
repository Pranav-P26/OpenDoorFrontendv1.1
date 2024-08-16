import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './Pages/HomePage/HomePage';
import DarkModeToggle from './Pages/HomePage/Components/DarkModeToggle';
import { lightTheme, darkTheme } from './theme';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </ThemeProvider>
  );
}

export default App;