import { action, computed, observable } from 'mobx';

import { IMainStat } from 'interfaces/IMainStat';
import { ICountryMainStat } from 'interfaces/ICountryMainStat';
import { ICountryTotalStat } from 'interfaces/ICountryTotalStat';
import { ICountryDayStat } from 'interfaces/ICountryDayStat';

import * as api from 'api/country';

class CountryStore {
  @observable globalStat: IMainStat | null = null;

  @observable allCountryStat: ICountryMainStat[] | null = null;

  @observable countryTotalStat: ICountryTotalStat | null = null;

  @observable countryTimelineStat: ICountryDayStat[] | null = null;
  
  @observable selectedPropertyName = 'totalCases';

  @observable amount = 5;

  @action setPropertyName = (propName:string) :void => {
    this.selectedPropertyName = propName;
  };

  @action setAmount = (amount:number) :void => {
    this.amount = amount;
  };

  @action loadGlobalStat = (): void => {
    api
      .loadGlobalStat()
      .then((res) => {
        this.globalStat = res;
      })
      .catch((error: Error) => error);
  };

  @action loadAllCountryStat = (): void => {
    api
      .loadAllCountryStat()
      .then((res) => {
        this.allCountryStat = res;
      })
      .catch((error: Error) => error);
  };

  @action loadCountryTotalStat = (countryCode: string): void => {
    api
      .loadCountryTotalStat(countryCode)
      .then((res) => {
        this.countryTotalStat = res;
      })
      .catch((error: Error) => error);
  };

  @action loadCountryTimelineStat = (countryCode: string): void => {
    api
      .loadCountryTimelineStat(countryCode)
      .then((res) => {
        this.countryTimelineStat = res;
      })
      .catch((error: Error) => error);
  };

  @computed get tableData(): Array<ICountryMainStat> {
    return (this.allCountryStat || []).map((element) => ({ ...element, key: element.code }));
  }

  @action countriesWithMostCases(propertyToBeSortedBy: string): Array<ICountryMainStat> {
    return (this.allCountryStat || []).sort((countryElementFirst, countryElementSecond) => {
      return (+countryElementSecond[propertyToBeSortedBy] -
          +countryElementFirst[propertyToBeSortedBy]);
    }).slice(0, this.amount);
  }

  @computed get countryFullTimelineStat(): { [name: string]: Array<[number, number]> } {
    return (this.countryTimelineStat || []).reduce<{ [name: string]: Array<[number, number]> }>(
      (stats: { [name: string]: Array<[number, number]> }, element: ICountryDayStat) => {
        stats.totalCases.push([
          new Date(element.date).getTime(),
          this.countryTimelineStat ? +element.cases : 0,
        ]);
        stats.totalDeaths.push([
          new Date(element.date).getTime(),
          this.countryTimelineStat ? +element.deaths : 0,
        ]);
        stats.totalRecoveries.push([
          new Date(element.date).getTime(),
          this.countryTimelineStat ? +element.recovered : 0,
        ]);

        return stats;
      },
      { totalCases: [], totalDeaths: [], totalRecoveries: [] },
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
