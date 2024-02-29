import React from 'react';
import ReactDOM from 'react-dom/client';

import SnackbarComponent from '@pages/Snackbar/SnackbarComponent';

const error: boolean = true;
const message: string = 'Something goes wrong';
const open: boolean = true;
const setOpen = () => {};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SnackbarComponent
    error={error}
    message={message}
    open={open}
    setOpen={setOpen}
  />,
);
