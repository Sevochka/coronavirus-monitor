import React from 'react';

import { IMainStat } from 'interfaces/IMainStat';

import './MainStatistic.scss';

type Props = {
  info: IMainStat,
  setPropertyName?: (propertyName: string) => void;
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
    if (setPropertyName) setPropertyName(property);
  };

  return (
    <article className="main-stat">
      <h2 className="main-stat__header">All-time statistics</h2>
      <div className="main-stat__wrapper">
        <section className="main-stat__card">
          <div className="main-stat__part stat-part">
            { setPropertyName? (
              <button
                type="button"
                className="stat-part__number btn info"
                onClick={() => handleStatPartClicked('totalCases')}
              >
                {numberWithCommas(totalCases)}
              </button>
            ): (
              <span
                className="stat-part__number number-infected"
              >
                {numberWithCommas(totalCases)}
              </span>
            )}
            <span className="stat-part__title">Total cases</span>
          </div>
          <div className="main-stat__part stat-part">
            <span className="stat-part__number">
              { setPropertyName? (
                <button
                  type="button"
                  className="stat-part__number btn info"
                  onClick={() => handleStatPartClicked('totalNewCasesToday')}
                >
                  {numberWithCommas(totalNewCasesToday)}
                </button>
              ): (
                <span
                  className="stat-part__number number-infected"
                >
                  {numberWithCommas(totalNewCasesToday)}
                </span>
              )}
            </span>
            <span className="stat-part__title">New cases today</span>
          </div>
        </section>

        <section className="main-stat__card">
          <div className="main-stat__part stat-part">
            <span className="stat-part__number number-death">
              { setPropertyName? (
                <button
                  type="button"
                  className="stat-part__number btn danger"
                  onClick={() => handleStatPartClicked('totalDeaths')}
                >
                  {numberWithCommas(totalDeaths)}
                </button>
              ): (
                <span
                  className="stat-part__number number-death"
                >
                  {numberWithCommas(totalDeaths)}
                </span>
              )}
            </span>
            <span className="stat-part__title">Total deaths</span>
          </div>
          <div className="main-stat__part stat-part">
            <span className="stat-part__number number-death">
              {
                setPropertyName? (
                  <button
                    type="button"
                    className="stat-part__number btn danger"
                    onClick={() => handleStatPartClicked('totalNewDeathsToday')}
                  >
                    {numberWithCommas(totalNewDeathsToday)}
                  </button>
                ): (
                  <span
                    className="stat-part__number number-death"
                  >
                    {numberWithCommas(totalNewDeathsToday)}
                  </span>
                )
}
            </span>
            <span className="stat-part__title">New deaths today</span>
          </div>
        </section>

        <section className="main-stat__card">
          <div className="main-stat__part stat-part">
            <span className="stat-part__number number-recovered">
              {
                setPropertyName? (
                  <button
                    type="button"
                    className="stat-part__number btn success"
                    onClick={() => handleStatPartClicked('totalRecovered')}
                  >
                    {numberWithCommas(totalRecovered)}
                  </button>
                ): (
                  <span
                    className="stat-part__number number-recovered"
                  >
                    {numberWithCommas(totalRecovered)}
                  </span>
                )
}
            </span>
            <span className="stat-part__title">Total recovered</span>
          </div>
          <div className="main-stat__part stat-part">
            <span className="stat-part__number number-serious">
              {setPropertyName ? (
                <button
                  type="button"
                  className="stat-part__number btn success"
                  onClick={() => handleStatPartClicked('totalSeriousCases')}
                >
                  {numberWithCommas(totalSeriousCases)}
                </button>
              ): (
                <span
                  className="stat-part__number number-serious"
                >
                  {numberWithCommas(totalSeriousCases)}
                </span>
              )}
            </span>
            <span className="stat-part__title">Total serious cases</span>
          </div>
        </section>
      </div>
    </article>
  );
};

export default MainStatistic;
