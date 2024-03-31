import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import GlobalStyle from '@app/styles/global';
import Theme from '@app/styles/Theme';
import SnackbarComponent from '@pages/Snackbar/SnackbarComponent';

import {setupStore} from './store';

// const setupStore = lazy(() => import('store/setupStore'));
const store = setupStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = setupStore();
console.log(store.getState());
root.render(
  <Provider store={store}>
    <Theme theme='dark'>
      <GlobalStyle />
      <SnackbarComponent />
    </Theme>
  </Provider>,
);
