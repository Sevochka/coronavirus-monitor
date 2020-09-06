import makeRequest from 'api/helpers/makeRequest';

const loadGlobalStat = async () => {
  const response = await makeRequest('global=stats');
  return response.results[0];
};

const loadAllCountryStat = async () => {
  const response = await makeRequest('countryTotals=ALL');
  return response.countryitems[0];
};

const loadCountryTotalStat = async (id) => {
  const response = await makeRequest(`countryTotal=${id}`);
  return response.countrydata[0];
};

const loadCountryTimelineStat = async (id) => {
  const response = await makeRequest(`countryTimeline=${id}`);
  return response.timelineitems[0];
};

export { loadGlobalStat, loadAllCountryStat, loadCountryTotalStat, loadCountryTimelineStat };
