import React from "react";
import { useParams } from "react-router-dom";

import CountryTimeline from "../../components/CountryTimeline/CountryTimeline"


const CountryPage = () => {

    let { id } = useParams()

    return (
        <>
            <h4>{id}</h4>
            <CountryTimeline />
        </>
    )
}

export default CountryPage;