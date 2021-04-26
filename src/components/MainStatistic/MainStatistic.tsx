import React from 'react';
import {inject, observer} from 'mobx-react';

import CountryStore from 'store/CountryStore';
import {IMainStat} from 'interfaces/IMainStat';
import MainStatCard from 'components/MainStatCard';

import './MainStatistic.scss';
import { ICountryMainStat } from 'interfaces/ICountryMainStat';


type Props = {
  info: IMainStat | ICountryMainStat,
  isCountryPage: boolean,
  store?: CountryStore
};

const MainStatistic: React.FC<Props> = inject('store')(
  observer(({info, isCountryPage, store}: Props) => {
    const {
      NewConfirmed: totalNewCasesToday,
      TotalConfirmed: totalCases,
      NewDeaths: totalNewDeathsToday,
      TotalDeaths: totalDeaths,
      TotalRecovered: totalRecovered,
      NewRecovered: totalNewRecovered
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
            properties={['TotalConfirmed', 'NewConfirmed']}
          />
          <MainStatCard
            isCountryPage={isCountryPage}
            colorClasses={['number-death', 'danger']}
            stats={[totalDeaths, totalNewDeathsToday]}
            titles={['Total deaths', 'Total new deaths today']}
            handleStatPartClicked={handleStatPartClicked}
            properties={['TotalDeaths', 'NewDeaths']}
          />
          <MainStatCard
            isCountryPage={isCountryPage}
            colorClasses={['number-recovered', 'success']}
            stats={[totalRecovered, totalNewRecovered]}
            titles={['Total recovered', 'Total new recovered']}
            handleStatPartClicked={handleStatPartClicked}
            properties={['TotalRecovered', 'NewRecovered']}
          />
        </div>
      </article>
    );
  }));

export default MainStatistic;
