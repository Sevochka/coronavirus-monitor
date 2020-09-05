import React from 'react';
import CardMainStat from 'components/MainStatistic';
import { inject, observer } from 'mobx-react';

const Main = inject('store')(
  observer(({ store }) => (
    <>{store.globalStat ? <CardMainStat info={store.globalStat} /> : null}</>
  )),
);

export default Main;
