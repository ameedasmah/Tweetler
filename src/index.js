import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store, persistor } from "./Redux/store"
import { PersistGate } from 'redux-persist/integration/react';
import { SnackbarProvider } from 'notistack';

ReactDOM.render(

  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <SnackbarProvider maxSnack={3} anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      >
        <App />
      </SnackbarProvider>
    </PersistGate>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
