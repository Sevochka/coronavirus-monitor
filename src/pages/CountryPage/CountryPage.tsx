import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import CountryStore from 'store/CountryStore';
import MainStatistic from 'components/MainStatistic';

import './CountryPage.scss';
import WithLoading from 'hocs/WithLoading';

type Props = {
  store: CountryStore,
};

type Params = {
  id: string,
};

const WithLoadingMainStat= WithLoading(MainStatistic);

const CountryPage: React.FC<Props> = inject('store')(
  observer(({ store }: Props) => {
    const { id } = useParams<Params>();

    useEffect(() => {
      store.setCountryTotalStat(id);
      store.loadCountryTimelineStat(id);
    }, [id, store, store.allCountryStat]);

    return (
      <>
        <h2 className="country-name">{store.countryTotalStat?.Country}</h2>

        <>
          <WithLoadingMainStat
            isLoading={!store.countryTotalStat}
            info={store.countryTotalStat}
            isCountryPage={false}
          />
          {/* <CountryTimeline info={store.countryTotalStat} store={store} /> */}
        </>
      </>
    );
  })
);

export default CountryPage;
