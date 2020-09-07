import WithLoading from '../../hocs/WithLoading';
import React from 'react';
import CardMainStat from 'components/MainStatistic';
import { inject, observer } from 'mobx-react';

const WithLoadingCardMainStat = WithLoading(CardMainStat);

const Main = inject('store')(
  observer(({ store }) => (
    <>
      <WithLoadingCardMainStat isLoading={!store.globalStat} info={store.globalStat} />
    </>
  )),
);

export default Main;
