import { action, decorate, observable } from 'mobx';
import axios from 'axios';

class CountryStore {
  globalStat = null;

  loadGlobalStat = () => {
    axios
      .get('https://api.thevirustracker.com/free-api?global=stats')
      .then((res) => {
        [this.globalStat] = res.data.results;
      })
      .catch((err) => err);
  };
}

decorate(CountryStore, {
  globalStat: observable,
  loadGlobalStat: action,
});

export default CountryStore;
