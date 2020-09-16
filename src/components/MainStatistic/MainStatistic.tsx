import React from 'react';
import {inject, observer} from 'mobx-react';

import CountryStore from 'store/CountryStore';
import {IMainStat} from 'interfaces/IMainStat';
import MainStatCard from 'components/MainStatCard/MainStatCard';

import './MainStatistic.scss';


type Props = {
  info: IMainStat,
  isCountryPage: boolean,
  store?: CountryStore
};

const MainStatistic: React.FC<Props> = inject('store')(
  observer(({info, isCountryPage, store}: Props) => {

    const {
      totalCases,
      totalDeaths,
      totalRecovered,
      totalNewCasesToday,
      totalNewDeathsToday,
      totalSeriousCases,
    } = info;

    const handleStatPartClicked = (property: string) => {
      if (store) {
        store.setPropertyName(property);
      }
    };

    return (
      <article className="main-stat">
        <h2 className="main-stat__header">All-time statistics</h2>
        <div className="main-stat__wrapper">
          <MainStatCard
            isCountryPage={isCountryPage}
            colorClasses={['number-infected', 'info']}
            stats={[totalCases, totalNewCasesToday]}
            titles={['Total cases', 'Total new cases today']}
            handleStatPartClicked={handleStatPartClicked}
            properties={['totalCases', 'totalNewCasesToday']}
          />
          <MainStatCard
            isCountryPage={isCountryPage}
            colorClasses={['number-death', 'danger']}
            stats={[totalDeaths, totalNewDeathsToday]}
            titles={['Total deaths', 'Total new deaths today']}
            handleStatPartClicked={handleStatPartClicked}
            properties={['totalDeaths', 'totalNewDeathsToday']}
          />
          <MainStatCard
            isCountryPage={isCountryPage}
            colorClasses={['number-recovered', 'success']}
            stats={[totalRecovered, totalSeriousCases]}
            titles={['Total recovered', 'Total new serious cases']}
            handleStatPartClicked={handleStatPartClicked}
            properties={['totalRecovered', 'totalSeriousCases']}
          />
        </div>
      </article>
    );
  }));

export default MainStatistic;
