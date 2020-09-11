import {action, computed, observable} from 'mobx';

import * as api from 'api/country';
import {IMainStat} from "../interfaces/IMainStat";
import {ICountryMainStat} from "../interfaces/ICountryMainStat";
import {ICountryTotalStat} from "../interfaces/ICountryTotalStat";
import {ICountryTimelineStat} from "../interfaces/ICountryTimelineStat";

export type stat = {
    x: number,
    y: number
}

class CountryStore {
    @observable globalStat: IMainStat | null = null;

    @observable allCountryStat: Array<ICountryMainStat> | null = null;

    @observable countryTotalStat: ICountryTotalStat | null = null;

    @observable countryTimelineStat: ICountryTimelineStat | null = null;

    @observable currentMonth: number = 7;

    @action setCurrentMonth(newMonth: number): void {
        this.currentMonth = newMonth;
    }

    @action loadGlobalStat = (): void => {
        api.loadGlobalStat()
            .then((res: IMainStat) => {
                this.globalStat = res;
            })
            .catch((err) => err);
    };

    @action loadAllCountryStat = (): void => {
        api.loadAllCountryStat()
            .then((res) => {
                this.allCountryStat = res;
            })
            .catch((err) => err);
    };

    @action loadCountryTotalStat = (countryCode: string): void => {
        api.loadCountryTotalStat(countryCode)
            .then((res) => {
                this.countryTotalStat = res;
            })
            .catch((err) => err);
    };

    @action loadCountryTimelineStat = (countryCode: string): void => {
        api.loadCountryTimelineStat(countryCode)
            .then((res) => {
                this.countryTimelineStat = res;
            })
            .catch((err) => err);
    };

    @computed get tableData(): Array<ICountryMainStat> {
        return Object.values(this.allCountryStat || {}).map((el) => ({...el, key: el.ourid}));
    }


    @computed get countryMonthStat(): { [name: string]: Array<stat> } {
        return Object.keys(this.countryTimelineStat || {})
            .filter((date) => !this.currentMonth || this.currentMonth === new Date(date).getMonth())
            .reduce<{ [name: string]: Array<stat> }>(
                (stats, date: string) => {
                    stats.totalCases.push({
                        x: new Date(date).getTime(),
                        y: this.countryTimelineStat ? +this.countryTimelineStat[date].total_cases : 0,
                    });
                    stats.totalDeaths.push({
                        x: new Date(date).getTime(),
                        y: this.countryTimelineStat ? +this.countryTimelineStat[date].total_deaths : 0,
                    });
                    stats.totalRecoveries.push({
                        x: new Date(date).getTime(),
                        y: this.countryTimelineStat ? +this.countryTimelineStat[date].total_recoveries : 0,
                    });
                    return stats;
                },
                {totalCases: [], totalDeaths: [], totalRecoveries: []},
            );
    }

    @computed get countryFullTimelineStat(): { [name: string]: Array<stat> } {
        return Object.keys(this.countryTimelineStat || {}).reduce<{ [name: string]: Array<stat> }>(
            (stats, date: string) => {
                stats.totalCases.push({
                    x: new Date(date).getTime(),
                    y: this.countryTimelineStat ? +this.countryTimelineStat[date].total_cases : 0,
                });
                stats.totalDeaths.push({
                    x: new Date(date).getTime(),
                    y: this.countryTimelineStat ? +this.countryTimelineStat[date].total_deaths : 0,
                });
                stats.totalRecoveries.push({
                    x: new Date(date).getTime(),
                    y: this.countryTimelineStat ? +this.countryTimelineStat[date].total_recoveries : 0,
                });
                return stats;
            },
            {totalCases: [], totalDeaths: [], totalRecoveries: []},
        );
    }

    @computed get countryTotalCases(): ([string, string] | [])[] {
        return Object.values(this.allCountryStat || {}).map((country) => {
            if (country.code) {
                return [country.code.toLowerCase(), country.total_cases];
            }
            return [];
        });
    }
}

export default CountryStore;
