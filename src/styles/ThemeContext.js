import React from 'react';
import { ThemeProvider } from 'styled-components';
import media from './partials/Screens';
import { GlobalStyles } from "./partials/globalStyles"; 

const Theme = ({ children }) => {
  return (
    <ThemeProvider
      theme={{
        ...media
      }}
    >
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default Theme;