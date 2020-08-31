import React from 'react';

import CardMainStat from '../../components/MainStatistic';
import './Main.css';

const Main = () => {
    const info = {
        total_cases: 24741651,
        total_recovered: 17185692,
        total_deaths: 837790,
        total_new_cases_today:0,
        total_new_deaths_today:0,
        total_serious_cases:0
    };

    return (
        <>
            <CardMainStat info={info}/>
            <br />
        </>
    );
};

export default Main;
