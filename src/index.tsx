import React from 'react';
import {render} from 'react-dom';
import './index.scss';
import App from "./App";

import CountryStore from 'store/CountryStore';

import 'antd/dist/antd.css';
import './index.scss';
import { Provider } from 'mobx-react';

const countryStore = new CountryStore();

countryStore.loadGlobalStat();
countryStore.loadAllCountryStat();

render(
    <Provider store={countryStore}>
        <App/>
    </Provider>,
    document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}
