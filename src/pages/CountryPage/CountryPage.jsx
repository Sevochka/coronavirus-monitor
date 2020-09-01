import React from "react";
import { useParams } from "react-router-dom";

import MainStatistic from "../../components/MainStatistic";
import CountryTimeline from "../../components/CountryTimeline";

const CountryPage = () => {

    const { id } = useParams();
    const info = {
        total_cases: 24741651,
        total_recovered: 17185692,
        total_deaths: 837790,
        total_new_cases_today: 0,
        total_new_deaths_today: 0,
        total_serious_cases: 0
    };

    return (
        <>
            <h4>{id}</h4>
            <MainStatistic info={info} />
            <CountryTimeline info={info} />
        </>
    );
};

export default CountryPage;