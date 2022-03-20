import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider, useSelector } from 'react-redux'
import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';
import * as sessionActions from './store/session';
import { ModalProvider } from './context/Modal';

// const state: any = useSelector(state => state)
const store: any = configureStore({});
let window: any

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();
  // console.log(csrfFetch, '<<<<><>>>><<<')

  // window.csrfFetch = csrfFetch;
  // window.store = store;
  // window.sessionActions = sessionActions;
}

if (process.env.NODE_ENV !== 'production') {
  // window.store = store;
}

function Root() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
