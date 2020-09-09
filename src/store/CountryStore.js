import {action, computed, decorate, observable} from 'mobx';
import * as api from 'api/country';

class CountryStore {
    @observable globalStat = null;

    @observable llCountryStat = null;

    @observable countryTotalStat = null;

    @observable countryTimelineStat = null;

    @observable currentMonth = 7;

    @action setCurrentMonth(newMonth) {
        this.currentMonth = newMonth;
    }

    @action loadGlobalStat = () => {
        api.loadGlobalStat()
            .then((res) => {
                this.globalStat = res;
            })
            .catch((err) => {
                console.log(err)
            });
    };

    @computed get countryTotalCases() {
        return Object.values(this.allCountryStat).map((country) => {
            if (country.code) {
                return [country.code.toLowerCase(), country.total_cases];
            }
            return [];
        });
    }

    @action loadAllCountryStat = () => {
        api.loadAllCountryStat()
            .then((res) => {
                this.allCountryStat = res;
            })
            .catch((err) => err);
    };

    @action loadCountryTotalStat = (id) => {
        api.loadCountryTotalStat(id)
            .then((res) => {
                this.countryTotalStat = res;
            })
            .catch((err) => err);
    };

    @action loadCountryTimelineStat = (id) => {
        api.loadCountryTimelineStat(id)
            .then((res) => {
                this.countryTimelineStat = res;
            })
            .catch((err) => err);
    };

    @computed get tableData() {
        return Object.values(this.allCountryStat).map((el) => ({...el, key: el.ourid}));
    }

    @computed get countryMonthStat() {
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
                {totalCases: [], totalDeaths: [], totalRecoveries: []},
            );
    }

    @computed get countryFullTimelineStat() {
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
            {totalCases: [], totalDeaths: [], totalRecoveries: []},
        );
    }
}


export default CountryStore;
