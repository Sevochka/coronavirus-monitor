import { action, computed, decorate, observable } from 'mobx';
import axios from 'axios';

class CountryStore {
  globalStat = null;

  allCountryStat = null;

  countryTotalStat = null;

  countryTimelineStat = null;

  currentMonth = 7;

  setCurrentMonth(newMonth) {
    this.currentMonth = newMonth;
  }

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

  get countryMonthStat() {
    return Object.keys(this.countryTimelineStat)
      .filter((date) => !this.currentMonth || this.currentMonth === new Date(date).getMonth())
      .reduce(
        (stats, date) => {
          stats.totalCases.push({
            x: new Date(date).getTime(),
            y: this.countryTimelineStat[date].total_cases,
          });
          stats.totalDeaths.push({
            x: new Date(date).getTime(),
            y: this.countryTimelineStat[date].total_deaths,
          });
          stats.totalRecoveries.push({
            x: new Date(date).getTime(),
            y: this.countryTimelineStat[date].total_recoveries,
          });
          return stats;
        },
        { totalCases: [], totalDeaths: [], totalRecoveries: [] },
      );
  }

  get countryFullTimelineStat() {
    return Object.keys(this.countryTimelineStat).reduce(
      (stats, date) => {
        stats.totalCases.push({
          x: new Date(date).getTime(),
          y: this.countryTimelineStat[date].total_cases,
        });
        stats.totalDeaths.push({
          x: new Date(date).getTime(),
          y: this.countryTimelineStat[date].total_deaths,
        });
        stats.totalRecoveries.push({
          x: new Date(date).getTime(),
          y: this.countryTimelineStat[date].total_recoveries,
        });
        return stats;
      },
      { totalCases: [], totalDeaths: [], totalRecoveries: [] },
    );
  }
}

decorate(CountryStore, {
  globalStat: observable,
  allCountryStat: observable,
  countryTotalStat: observable,
  countryTimelineStat: observable,
  currentMonth: observable,
  tableData: computed,
  countryMonthStat: computed,
  countryFullTimelineStat: computed,
  setCurrentMonth: action,
  loadGlobalStat: action,
  loadAllCountryStat: action,
  loadCountryTotalStat: action,
  loadCountryTimelineStat: action,
});

export default CountryStore;
