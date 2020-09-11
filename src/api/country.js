import makeRequest from 'api/helpers/makeRequest';

const loadGlobalStat = async () => {
    const response = await makeRequest('global=stats');
    return response.results[0];
};

const loadAllCountryStat = async () => {
    const response = await makeRequest('countryTotals=ALL');
    return response.countryitems[0];
};

const loadCountryTotalStat = async (countryCode) => {
    const response = await makeRequest(`countryTotal=${countryCode}`);
    console.log(response.countrydata[0])
    return response.countrydata[0];
};

const loadCountryTimelineStat = async (id) => {
    const response = await makeRequest(`countryTimeline=${id}`);
    return response.timelineitems[0];
};

export {loadGlobalStat, loadAllCountryStat, loadCountryTotalStat, loadCountryTimelineStat};
