import React from 'react';

import {IMainStat} from "interfaces/IMainStat";

import './MainStatistic.scss';

type Props = {
    info: IMainStat
}

const MainStatistic: React.FC<Props> = ({info}: Props) => {
    const numberWithCommas = (x: string): string => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const {
        total_cases: totalCases,
        total_deaths: totalDeaths,
        total_recovered: totalRecovered,
        total_new_cases_today: totalNewCasesToday,
        total_new_deaths_today: totalNewDeathsToday,
        total_serious_cases: totalSeriousCases,
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
                        <span className="stat-part__title">Выявлено заболевших</span>
                    </div>
                    <div className="main-stat__part stat-part">
            <span className="stat-part__number number-infected">
              {numberWithCommas(totalNewCasesToday)}
            </span>
                        <span className="stat-part__title">Выявлено заболевшихза сутки</span>
                    </div>
                </section>

                <section className="main-stat__card">
                    <div className="main-stat__part stat-part">
                        <span className="stat-part__number number-death">{numberWithCommas(totalDeaths)}</span>
                        <span className="stat-part__title">Человек умерло</span>
                    </div>
                    <div className="main-stat__part stat-part">
            <span className="stat-part__number number-death">
              {numberWithCommas(totalNewDeathsToday)}
            </span>
                        <span className="stat-part__title">Человека умерло за сутки</span>
                    </div>
                </section>

                <section className="main-stat__card">
                    <div className="main-stat__part stat-part">
            <span className="stat-part__number number-recovered">
              {numberWithCommas(totalRecovered)}
            </span>
                        <span className="stat-part__title">Человек выздоровело</span>
                    </div>
                    <div className="main-stat__part stat-part">
            <span className="stat-part__number number-serious">
              {numberWithCommas(totalSeriousCases)}
            </span>
                        <span className="stat-part__title">В тяжелом состоянии</span>
                    </div>
                </section>
            </div>
        </article>
    );
};

export default MainStatistic;
