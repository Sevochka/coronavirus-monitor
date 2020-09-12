import makeRequest from 'api/helpers/makeRequest';
import makeRequest2 from "api/helpers/makeRequest";

const loadGlobalStat = async () => {
    return await makeRequest('global-stats');
};

const loadAllCountryStat = async () => {
    return await makeRequest('country-totals');
};

const loadCountryTotalStat = async (countryCode) => {
    return await makeRequest(`country-totals/${countryCode}`);
};

const loadCountryTimelineStat = async (id) => {
    const response = await makeRequest(`country-timeline/${id}`);
    return response.timeline;
};

export {loadGlobalStat, loadAllCountryStat, loadCountryTotalStat, loadCountryTimelineStat};
