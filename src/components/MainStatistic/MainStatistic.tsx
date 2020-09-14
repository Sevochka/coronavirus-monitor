import React from 'react';

import { IMainStat } from 'interfaces/IMainStat';

import './MainStatistic.scss';

type Props = {
  info: IMainStat,
  setPropertyName: (propertyName: string) => void;
};

const MainStatistic: React.FC<Props> = ({ info, setPropertyName }: Props) => {
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

  const handleStatPartClicked = (property:string) => {
    setPropertyName(property);
  };

  return (
    <article className="main-stat">
      <h2 className="main-stat__header">Статистика за все время</h2>

      <div className="main-stat__wrapper">
        <section className="main-stat__card">
          <div className="main-stat__part stat-part">
            <button
              type="button"
              className="stat-part__number number-infected btn info"
              onClick={() => handleStatPartClicked('totalCases')}
            >
              {numberWithCommas(totalCases)}
            </button>
            <span className="stat-part__title">Выявлено заболевших</span>
          </div>
          <div className="main-stat__part stat-part">
            <span className="stat-part__number number-infected">
              <button
                type="button"
                className="stat-part__number number-infected btn info"
                onClick={() => handleStatPartClicked('totalNewCasesToday')}
              >
                {numberWithCommas(totalNewCasesToday)}
              </button>
            </span>
            <span className="stat-part__title">Выявлено заболевшихза сутки</span>
          </div>
        </section>

        <section className="main-stat__card">
          <div className="main-stat__part stat-part">
            <span className="stat-part__number number-death">
              <button
                type="button"
                className="stat-part__number number-infected btn danger"
                onClick={() => handleStatPartClicked('totalDeaths')}
              >
                {numberWithCommas(totalDeaths)}
              </button>
            </span>
            <span className="stat-part__title">Человек умерло</span>
          </div>
          <div className="main-stat__part stat-part">
            <span className="stat-part__number number-death">
              <button
                type="button"
                className="stat-part__number number-infected btn danger"
                onClick={() => handleStatPartClicked('totalNewDeathsToday')}
              >
                {numberWithCommas(totalNewDeathsToday)}
              </button>
            </span>
            <span className="stat-part__title">
              Человека умерло за сутки
            </span>
          </div>
        </section>

        <section className="main-stat__card">
          <div className="main-stat__part stat-part">
            <span className="stat-part__number number-recovered">
              <button
                type="button"
                className="stat-part__number number-infected btn success"
                onClick={() => handleStatPartClicked('totalRecovered')}
              >
                {numberWithCommas(totalRecovered)}
              </button>
            </span>
            <span className="stat-part__title">Человек выздоровело</span>
          </div>
          <div className="main-stat__part stat-part">
            <span className="stat-part__number number-serious">
              <button
                type="button"
                className="stat-part__number number-infected btn success"
                onClick={() => handleStatPartClicked('totalSeriousCases')}
              >
                {numberWithCommas(totalSeriousCases)}
              </button>
            </span>
            <span className="stat-part__title">В тяжелом состоянии</span>
          </div>
        </section>
      </div>
    </article>
  );
};

export default MainStatistic;
