import ReactDOM from 'react-dom/client';

import GlobalStyle from '@app/styles/global';
import Theme from '@app/styles/Theme';
const theme: string = 'dark';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Theme theme={theme}>
    <GlobalStyle />
    123
  </Theme>,
);
