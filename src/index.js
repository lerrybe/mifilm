import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './_store/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
