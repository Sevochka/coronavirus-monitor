import axios, { AxiosResponse } from 'axios';

import { IMainStat } from 'interfaces/IMainStat';
import { ICountryMainStat } from 'interfaces/ICountryMainStat';
import { ICountryTimelineStat } from 'interfaces/ICountryTimelineStat';
import { ICountryTotalStat } from 'interfaces/ICountryTotalStat';

const mainUrl = 'https://whispering-bastion-66552.herokuapp.com/api/';

const loadGlobalStat = (): Promise<AxiosResponse<IMainStat> | Error> => {
  return axios
    .get(`${mainUrl}global-stats`)
    .then((response) => {
      return response;
    })
    .catch((error: Error) => error);
};

const loadAllCountryStat = (): Promise<AxiosResponse<ICountryMainStat[]> | Error> => {
  return axios
    .get(`${mainUrl}country-totals`)
    .then((response) => {
      return response;
    })
    .catch((error: Error) => error);
};

const loadCountryTotalStat = (
  countryCode: string,
): Promise<AxiosResponse<ICountryTotalStat> | Error> => {
  return axios
    .get(`${mainUrl}country-totals/${countryCode}`)
    .then((response) => {
      return response;
    })
    .catch((error: Error) => error);
};

const loadCountryTimelineStat = (
  id: string,
): Promise<AxiosResponse<ICountryTimelineStat> | Error> => {
  return axios
    .get(`${mainUrl}country-timeline/${id}`)
    .then((response) => {
      return response;
    })
    .catch((error: Error) => error);
};

export { loadGlobalStat, loadAllCountryStat, loadCountryTotalStat, loadCountryTimelineStat };
