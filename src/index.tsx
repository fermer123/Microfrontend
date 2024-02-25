import ReactDOM from 'react-dom/client';

import GlobalStyle from '@app/styles/global';
import Theme from '@app/styles/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Theme>
    <GlobalStyle />
    123
  </Theme>,
);
