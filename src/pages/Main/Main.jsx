import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardMainStat from 'components/MainStatistic';

const Main = () => {
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get('https://api.thevirustracker.com/free-api?global=stats')
      .then((res) => {
        setInfo(res.data.results[0]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {!isLoading ? <CardMainStat info={info} /> : null}
    </>
  );
};

export default Main;
