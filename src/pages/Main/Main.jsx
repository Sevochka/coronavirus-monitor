import React from 'react';
import { inject, observer } from 'mobx-react';
import WithLoading from '../../hocs/WithLoading';
import CardMainStat from 'components/MainStatistic';
import WorldMap from 'components/WorldMap';

const WithLoadingCardMainStat = WithLoading(CardMainStat);

const WithLoadingWorldMap = WithLoading(WorldMap);

const Main = inject('store')(
  observer(({ store }) => (
    <>
      <WithLoadingCardMainStat isLoading={!store.globalStat} info={store.globalStat} />
      <hr />

      <WithLoadingWorldMap isLoading={!store.allCountryStat} />
    </>
  )),
);

export default Main;
