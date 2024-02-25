import {ThemeProvider as ScThemeProvider} from 'styled-components';

import {StyledEngineProvider} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import {darkThemeColors, lightThemeColors} from './default_variables';

const Theme = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: string;
}) => {
  const muiTheme = createTheme();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <ScThemeProvider
          theme={theme === 'dark' ? darkThemeColors : lightThemeColors}>
          {children}
        </ScThemeProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
export default Theme;
