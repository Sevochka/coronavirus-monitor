import React from 'react';

import './MainStatistic.css';

const KEYS = [
  'cases',
  'death',
  'recovered',
];

const MainStatistic = (props) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };


  const {total_cases, total_deaths, total_recovered} = props.info;
  return (
    <>
      <article className="main-stat">
        <h2 className="main-stat__header">Статистика за все время</h2>

        <div className="stat-cards-wrapper">
          <section className="main-stat__card">
            <div className="card__part">
              <span className="part__number number-infected">7,717</span>
              <span className="part__title">Выявлено заболевших</span>
            </div>
            <div className="card__part">
              <span className="part__number number-infected">2</span>
              <span className="part__title">Выявлено заболевшихза сутки</span>
            </div>
          </section>

          <section className="main-stat__card">
            <div className="card__part">
              <span className="part__number number-death">7,717</span>
              <span className="part__title">Человек умерло</span>
            </div>
            <div className="card__part">
              <span className="part__number number-death">2</span>
              <span className="part__title">Человека умерло за сутки</span>
            </div>
          </section>

          <section className="main-stat__card">
            <div className="card__part">
              <span className="part__number number-recovered">7,717</span>
              <span className="part__title">Человек выздоровело</span>
            </div>
            <div className="card__part">
              <span className="part__number number-serious">2</span>
              <span className="part__title">В тяжелом состоянии</span>
            </div>
          </section>
        </div>
      </article>

      <br />

      {/* <Card title="Заболевшие сейчас" style={{ width: 300 }} className="stat-card">
                <p>
                    12000
                </p>
            </Card> */}

    </>
  );
};

export default MainStatistic;
