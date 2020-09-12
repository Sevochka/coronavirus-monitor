/* eslint-disable @typescript-eslint/require-await */
import makeRequest from 'api/helpers/makeRequest';

const loadGlobalStat = async (): Promise<any> => makeRequest('global-stats');

const loadAllCountryStat = async (): Promise<any> => makeRequest('country-totals');

const loadCountryTotalStat = async (countryCode: string): Promise<any> =>
  makeRequest(`country-totals/${countryCode}`);

const loadCountryTimelineStat = async (id: string): Promise<any> =>
  makeRequest(`country-timeline/${id}`);

export { loadGlobalStat, loadAllCountryStat, loadCountryTotalStat, loadCountryTimelineStat };
