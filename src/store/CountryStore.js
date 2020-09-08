import { action, computed, decorate, observable } from 'mobx';
import * as api from 'api/country';

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
    api
      .loadGlobalStat()
      .then((res) => {
        this.globalStat = res;
      })
      .catch((err) => err);
  };

  loadAllCountryStat = () => {
    api
      .loadAllCountryStat()
      .then((res) => {
        this.allCountryStat = res;
      })
      .catch((err) => err);
  };

  loadCountryTotalStat = (id) => {
    api
      .loadCountryTotalStat(id)
      .then((res) => {
        this.countryTotalStat = res;
      })
      .catch((err) => err);
  };

  loadCountryTimelineStat = (id) => {
    api
      .loadCountryTimelineStat(id)
      .then((res) => {
        this.countryTimelineStat = res;
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

  get countryTotalCases() {
    return this.allCountryStat
      ? Object.values(this.allCountryStat).map((country) => {
          if (country.code) {
            return [country.code.toLowerCase(), country.total_cases];
          }
          return [];
        })
      : [];
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
  countryTotalCases: computed,
  countryFullTimelineStat: computed,
  setCurrentMonth: action,
  loadGlobalStat: action,
  loadAllCountryStat: action,
  loadCountryTotalStat: action,
  loadCountryTimelineStat: action,
});

export default CountryStore;
