/* eslint-disable react/jsx-filename-extension */
import CountryStore from './store/CountryStore';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import App from 'App/App';
import * as serviceWorker from 'serviceWorker';
import './index.scss';
import { Provider } from 'mobx-react';

const countryStore = new CountryStore();

countryStore.loadGlobalStat();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={countryStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
