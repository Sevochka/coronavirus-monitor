import { action, decorate, observable } from 'mobx';
import axios from 'axios';

class CountryStore {
  globalStat = null;

  allCountryStat = null;

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
}

decorate(CountryStore, {
  globalStat: observable,
  allCountryStat: observable,
  loadGlobalStat: action,
  loadAllCountryStat: action,
});

export default CountryStore;
