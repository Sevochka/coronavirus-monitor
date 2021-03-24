import React from 'react';
import { inject, observer } from 'mobx-react';

import WithLoading from 'hocs/WithLoading';
import WorldMap from 'components/WorldMap';
import CountryStore from 'store/CountryStore';
import CardMainStat from 'components/MainStatistic';
import CountryComparison from 'components/CountryComparison';

const WithLoadingCardMainStat = WithLoading(CardMainStat);

const WithLoadingWorldMap = WithLoading(WorldMap);

const WithLoadingCountryComparison = WithLoading(CountryComparison);

type Props = {
  store: CountryStore,
};

const Main: React.FC<Props> = inject('store')(
  observer(({ store }: Props) => (
    <>
      <WithLoadingCardMainStat
        isLoading={!store.globalStat}
        info={store.globalStat}
        isCountryPage={false}
      />

      <WithLoadingCountryComparison isLoading={!store.allCountryStat} />

      <WithLoadingWorldMap isLoading={!store.allCountryStat} />
    </>
  )),
);

export default Main;
