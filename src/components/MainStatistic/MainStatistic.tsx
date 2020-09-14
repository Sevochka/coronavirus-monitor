import React from 'react';

import { IMainStat } from 'interfaces/IMainStat';

import './MainStatistic.scss';

type Props = {
  info: IMainStat,
};

const MainStatistic: React.FC<Props> = ({ info }: Props) => {
  const numberWithCommas = (x: string): string =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const {
    totalCases,
    totalDeaths,
    totalRecovered,
    totalNewCasesToday,
    totalNewDeathsToday,
    totalSeriousCases,
  } = info;

  return (
    <article className="main-stat">
      <h2 className="main-stat__header">Статистика за все время</h2>

      <div className="main-stat__wrapper">
        <section className="main-stat__card">
          <div className="main-stat__part stat-part">
            <span className="stat-part__number number-infected">
              {numberWithCommas(totalCases)}
            </span>
            <span className="stat-part__title">Total cases</span>
          </div>
          <div className="main-stat__part stat-part">
            <span className="stat-part__number number-infected">
              {numberWithCommas(totalNewCasesToday)}
            </span>
            <span className="stat-part__title">New cases today</span>
          </div>
        </section>

        <section className="main-stat__card">
          <div className="main-stat__part stat-part">
            <span className="stat-part__number number-death">{numberWithCommas(totalDeaths)}</span>
            <span className="stat-part__title">Total deaths</span>
          </div>
          <div className="main-stat__part stat-part">
            <span className="stat-part__number number-death">
              {numberWithCommas(totalNewDeathsToday)}
            </span>
            <span className="stat-part__title">New deaths today</span>
          </div>
        </section>

        <section className="main-stat__card">
          <div className="main-stat__part stat-part">
            <span className="stat-part__number number-recovered">
              {numberWithCommas(totalRecovered)}
            </span>
            <span className="stat-part__title">Total recovered</span>
          </div>
          <div className="main-stat__part stat-part">
            <span className="stat-part__number number-serious">
              {numberWithCommas(totalSeriousCases)}
            </span>
            <span className="stat-part__title">Total serious cases</span>
          </div>
        </section>
      </div>
    </article>
  );
};

export default MainStatistic;
