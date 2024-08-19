import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Tab, Tabs, Paper, Typography } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import { lightTheme, darkTheme } from '../../theme';

const AuthForms = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log(values);
    setSubmitting(false);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Box className="flex justify-center items-center min-h-screen" sx={{ backgroundColor: theme.palette.background.default }}>
        <Paper elevation={3} className="w-full max-w-md p-8" sx={{ borderRadius: '12px' }}>
          <Typography variant="h4" align="center" gutterBottom className="font-bold text-2xl mb-4">
            {activeTab === 0 ? 'Login' : 'Sign Up'}
          </Typography>
          <Tabs value={activeTab} onChange={handleTabChange} centered className="mb-6">
            <Tab label="Login" className="text-lg font-semibold" />
            <Tab label="Sign Up" className="text-lg font-semibold" />
          </Tabs>
          <SwipeableViews index={activeTab} onChangeIndex={handleTabChange} animateHeight>
            <Box p={3}>
              <LoginForm onSubmit={handleSubmit} />
            </Box>
            <Box p={3}>
              <SignupForm onSubmit={handleSubmit} />
            </Box>
          </SwipeableViews>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default AuthForms;