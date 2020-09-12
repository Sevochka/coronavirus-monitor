import {action, computed, observable} from 'mobx';

import * as api from 'api/country';
import {IMainStat} from "../interfaces/IMainStat";
import {ICountryMainStat} from "../interfaces/ICountryMainStat";
import {ICountryTotalStat} from "../interfaces/ICountryTotalStat";
import {ICountryTimelineStat} from "../interfaces/ICountryTimelineStat";
import {ICountryDayStat} from "../interfaces/ICountryDayStat";

export type stat = {
    x: number,
    y: number
}

class CountryStore {
    @observable globalStat: IMainStat | null = null;

    @observable allCountryStat: Array<ICountryMainStat> | null = null;

    @observable countryTotalStat: ICountryTotalStat | null = null;

    @observable countryTimelineStat: Array<ICountryDayStat> | null = null;

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
        return (this.allCountryStat || []).map((el) => ({...el, key: el.code}));
    }

    @computed get countryFullTimelineStat(): { [name: string]: Array<[number, number]> } {
        return (this.countryTimelineStat || []).reduce<{ [name: string]: Array<[number, number]> }>(
            (stats: { [name: string]: Array<[number, number]> }, el: ICountryDayStat) => {
                    stats.totalCases.push([
                        new Date(el.date).getTime(),
                        this.countryTimelineStat ? + el.cases : 0,
                    ]);
                    stats.totalDeaths.push([
                        new Date(el.date).getTime(),
                        this.countryTimelineStat ? +el.deaths : 0,
                    ]);
                    stats.totalRecoveries.push([
                        new Date(el.date).getTime(),
                        this.countryTimelineStat ? +el.recovered : 0,
                    ]);

                return stats;
            },
            {totalCases: [], totalDeaths: [], totalRecoveries: []},
        );
    }

    @computed get countryTotalCases(): ([string, string] | [])[] {

        return (this.allCountryStat || []).map((country) => {
            if (country.code) {
                return [country.code.toLowerCase(), country.totalCases];
            }
            return [];
        });
    }
}

export default CountryStore;
