import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import CountryStore from 'store/CountryStore';
import MainStatistic from 'components/MainStatistic';
import CountryTimeline from 'components/CountryTimeline';

import './CountryPage.scss';
import { ICountryMainStat } from 'interfaces/ICountryMainStat';

type Props = {
  store: CountryStore,
};

type Params = {
  id: string,
};

const CountryPage: React.FC<Props> = inject('store')(
  observer(({ store }: Props) => {
    const { id } = useParams<Params>();

    useEffect(() => {
      store.loadCountryTimelineStat(id);
    }, [id, store]);

    if (store.countryTotalStat == null) {
      return <></>;
    }
    return (
      <>
        <h2 className="country-name">{store.countryTotalStat.Country}</h2>
        {store.globalStat ? (
          <>
            <MainStatistic info={store.globalStat} isCountryPage />
            {/* <CountryTimeline info={store.countryTotalStat} store={store} /> */}
          </>
        ) : null}
      </>
    );
  })
);

export default CountryPage;
