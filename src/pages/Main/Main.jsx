import React from "react";

import CardMainStat from "../../components/MainStatistic";
import "./Main.css";

const Main = () => {

    const info = {
        total_cases:24741651,
        total_recovered:17185692,
        total_deaths:837790,
    }
    return (
        <>
            <CardMainStat info={info}/>
            <br/>
        </>
    );
};

export default Main;
