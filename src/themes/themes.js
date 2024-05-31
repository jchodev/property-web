import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, pink } from '@mui/material/colors';

const theme = createTheme({
    palette: {
      primary: {
        main: grey[700],
      },
      secondary: {
        main: pink[500],
      },
    },
});

export default theme;