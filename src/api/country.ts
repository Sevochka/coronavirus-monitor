import axios from 'axios';

import { IMainStat } from 'interfaces/IMainStat';
import { ICountryMainStat } from 'interfaces/ICountryMainStat';
import { ICountryTimelineStat } from "interfaces/ICountryTimelineStat";
import { ICountryTotalStat } from "interfaces/ICountryTotalStat";

const mainUrl = 'https://whispering-bastion-66552.herokuapp.com/api/';

const loadGlobalStat = () => {
  axios
    .get<IMainStat>(`${mainUrl}global-stats`)
    .then((response) => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
};

const loadAllCountryStat = () => {
  axios
    .get<ICountryMainStat[]>(`${mainUrl}country-totals`)
    .then((response) => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
};

const loadCountryTotalStat = (countryCode: string) => {
  axios
    .get<ICountryTotalStat>(`${mainUrl}country-totals/${countryCode}`)
    .then((response) => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
};

const loadCountryTimelineStat = (id: string) => {
  axios
    .get<ICountryTimelineStat>(`${mainUrl}country-timeline/${id}`)
    .then((response) => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
};

export { loadGlobalStat, loadAllCountryStat, loadCountryTotalStat, loadCountryTimelineStat };
