import { action, computed, decorate, observable } from 'mobx';
import * as api from 'api/country';

class CountryStore {
  globalStat = null;

  allCountryStat = null;

  countryTotalStat = null;

  countryTimelineStat = null;

  loadGlobalStat = () => {
    api.loadGlobalStat()
      .then((res) => {
        this.globalStat = res;
      })
      .catch((err) => err);
  };

  loadAllCountryStat = () => {
    api.loadAllCountryStat()
      .then((res) => {
        this.allCountryStat = res;
      })
      .catch((err) => err);
  };

  loadCountryTotalStat = (id) => {
    api.loadCountryTotalStat(id)
      .then((res) => {
        this.countryTotalStat = res;
      })
      .catch((err) => err);
  };

  loadCountryTimelineStat = (id) => {
    api.loadCountryTimelineStat(id)
      .then((res) => {
        this.countryTimelineStat = res;
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
