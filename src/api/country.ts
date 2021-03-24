import axios, {AxiosResponse} from 'axios';

import {IMainStat} from 'interfaces/IMainStat';
import {ICountryDayStat} from 'interfaces/ICountryDayStat';
import {ICountryMainStat} from 'interfaces/ICountryMainStat';
import {ICountryTotalStat} from 'interfaces/ICountryTotalStat';

const mainUrl = 'https://whispering-bastion-66552.herokuapp.com/api/';

const loadGlobalStat = (): Promise<IMainStat> => {
  return axios
    .get<IMainStat>(`${mainUrl}global-stats`)
    .then((response: AxiosResponse<IMainStat>) => {
      return response.data;
    });
};

const loadAllCountryStat = (): Promise<ICountryMainStat[]> => {
  return axios
    .get(`${mainUrl}country-totals`)
    .then((response: AxiosResponse<ICountryMainStat[]>) => {
      return response.data;
    });
};

const loadCountryTotalStat = (countryCode: string): Promise<ICountryTotalStat> => {
  return axios
    .get(`${mainUrl}country-totals/${countryCode}`)
    .then((response: AxiosResponse<ICountryTotalStat>) => {
      return response.data;
    });
};

const loadCountryTimelineStat = (id: string): Promise<ICountryDayStat[]> => {
  return axios
    .get(`${mainUrl}country-timeline/${id}`)
    .then((response: AxiosResponse<ICountryDayStat[]>) => {
      return response.data;
    });
};

export {loadGlobalStat, loadAllCountryStat, loadCountryTotalStat, loadCountryTimelineStat};
