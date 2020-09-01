import React, { useState, useEffect } from 'react';

import CardMainStat from '../../components/MainStatistic';
import './Main.css';
import axios from 'axios';

const Main = () => {
    const [info, setInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        axios.get('https://api.thevirustracker.com/free-api?global=stats')
            .then(res => {
                setInfo(res.data.results[0]);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <>

            {!isLoading ? <CardMainStat info={info} /> : null}
            <br />
        </>
    );
};

export default Main;
