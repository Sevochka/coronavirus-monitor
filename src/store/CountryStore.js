import { action, computed, decorate, observable } from 'mobx';
import axios from 'axios';

class CountryStore {
  globalStat = null;

  allCountryStat = null;

  countryTotalStat = null;

  countryTimelineStat = null;

  loadGlobalStat = () => {
    axios
      .get('https://api.thevirustracker.com/free-api?global=stats')
      .then((res) => {
        [this.globalStat] = res.data.results;
      })
      .catch((err) => err);
  };

  loadAllCountryStat = () => {
    axios
      .get('https://api.thevirustracker.com/free-api?countryTotals=ALL')
      .then((res) => {
        [this.allCountryStat] = res.data.countryitems;
      })
      .catch((err) => err);
  };

  loadCountryTotalStat = (id) => {
    axios
      .get(`https://api.thevirustracker.com/free-api?countryTotal=${id}`)
      .then((res) => {
        [this.countryTotalStat] = res.data.countrydata;
      })
      .catch((err) => err);
  };

  loadCountryTimelineStat = (id) => {
    axios
      .get(`https://api.thevirustracker.com/free-api?countryTimeline=${id}`)
      .then((res) => {
        [this.countryTimelineStat] = res.data.timelineitems;
      })
      .catch((err) => err);
  };

  get tableData() {
    return Object.values(this.allCountryStat).map((el) => ({ ...el, key: el.ourid }));
  }
}

decorate(CountryStore, {
  globalStat: observable,
  allCountryStat: observable,
  countryTotalStat: observable,
  countryTimelineStat: observable,
  tableData: computed,
  loadGlobalStat: action,
  loadAllCountryStat: action,
  loadCountryTotalStat: action,
  loadCountryTimelineStat: action,
});

export default CountryStore;
