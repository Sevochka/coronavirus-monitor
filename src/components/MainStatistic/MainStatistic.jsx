import React from 'react'
import PropTypes from 'prop-types'

import './MainStatistic.css'

const MainStatistic = (props) => {
  const numberWithCommas = (x) =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const { info } = props
  const {
    total_cases: totalCases,
    total_deaths: totalDeaths,
    total_recovered: totalRecovered,
    total_new_cases_today: totalNewCasesToday,
    total_new_deaths_today: totalNewDeathsToday,
    total_serious_cases: totalSeriousCases,
  } = info

  return (
    <article className="main-stat">
      <h2 className="main-stat__header">Статистика за все время</h2>

      <div className="stat-cards-wrapper">
        <section className="main-stat__card">
          <div className="card__part">
            <span className="part__number number-infected">
              {numberWithCommas(totalCases)}
            </span>
            <span className="part__title">Выявлено заболевших</span>
          </div>
          <div className="card__part">
            <span className="part__number number-infected">
              {numberWithCommas(totalNewCasesToday)}
            </span>
            <span className="part__title">Выявлено заболевшихза сутки</span>
          </div>
        </section>

        <section className="main-stat__card">
          <div className="card__part">
            <span className="part__number number-death">
              {numberWithCommas(totalDeaths)}
            </span>
            <span className="part__title">Человек умерло</span>
          </div>
          <div className="card__part">
            <span className="part__number number-death">
              {numberWithCommas(totalNewDeathsToday)}
            </span>
            <span className="part__title">Человека умерло за сутки</span>
          </div>
        </section>

        <section className="main-stat__card">
          <div className="card__part">
            <span className="part__number number-recovered">
              {numberWithCommas(totalRecovered)}
            </span>
            <span className="part__title">Человек выздоровело</span>
          </div>
          <div className="card__part">
            <span className="part__number number-serious">
              {numberWithCommas(totalSeriousCases)}
            </span>
            <span className="part__title">В тяжелом состоянии</span>
          </div>
        </section>
      </div>
    </article>
  )
}

MainStatistic.propTypes = {
  info: {
    total_cases: PropTypes.number,
    total_deaths: PropTypes.number,
    total_recovered: PropTypes.number,
    total_new_cases_today: PropTypes.number,
    total_new_deaths_today: PropTypes.number,
    total_serious_cases: PropTypes.number,
  },
}

MainStatistic.defaultProps = {
  info: {},
}

export default MainStatistic
