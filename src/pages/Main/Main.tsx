import React from 'react';
import { inject, observer } from 'mobx-react';
import CountryStore from '../../store/CountryStore';
import WithLoading from 'hocs/WithLoading';
import CardMainStat from 'components/MainStatistic';
import WorldMap from 'components/WorldMap';
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
        setPropertyName={store.setPropertyName}
      />

      <WithLoadingCountryComparison isLoading={!store.allCountryStat} />

      <WithLoadingWorldMap isLoading={!store.allCountryStat} />
    </>
  )),
);

export default Main;
