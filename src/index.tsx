import ReactDOM from 'react-dom/client';

import GlobalStyle from '@app/styles/global';
import Theme from '@app/styles/Theme';
import SnackbarComponent from './pages/Snackbar/SnackbarComponent';
const theme: string = 'dark';
const error: boolean = true;
const message: string = 'Something goes wrong';
const open: boolean = true;
const setOpen = () => {};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Theme theme={theme}>
    <GlobalStyle />
    <SnackbarComponent
      error={error}
      message={message}
      open={open}
      setOpen={setOpen}
    />
  </Theme>,
);
