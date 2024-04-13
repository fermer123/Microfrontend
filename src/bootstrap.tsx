import ReactDOM from 'react-dom/client';

import GlobalStyle from '@app/styles/global';
import Theme from '@app/styles/Theme';
import SnackbarComponent from '@pages/Snackbar/SnackbarComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Theme theme='dark'>
    <GlobalStyle />
    <SnackbarComponent />
  </Theme>,
);
