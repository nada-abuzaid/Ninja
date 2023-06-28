import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ColorModeContext, useMode } from './theme';

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <div className="content">
            <h1>Hacker Mode ^^</h1>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
