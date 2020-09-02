import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import MainStatistic from '../../components/MainStatistic';
import CountryTimeline from '../../components/CountryTimeline';

const CountryPage = () => {
  const { id } = useParams();

  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`https://api.thevirustracker.com/free-api?countryTotal=${id}`)
      .then((res) => {
        setInfo(res.data.countrydata[0]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <>
      <h4>{id}</h4>
      {!isLoading ? (
        <>
          <MainStatistic info={info} />
          <CountryTimeline info={info} />
        </>
      ) : null}
    </>
  );
};

export default CountryPage;
