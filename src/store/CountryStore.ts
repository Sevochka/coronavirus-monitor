import {action, computed, observable} from 'mobx';

import {IMainStat} from 'interfaces/IMainStat';
import {ICountryDayStat} from 'interfaces/ICountryDayStat';
import {ICountryMainStat} from 'interfaces/ICountryMainStat';
import {ICountryTotalStat} from 'interfaces/ICountryTotalStat';

import * as api from 'api/country';

class CountryStore {
  @observable globalStat: IMainStat | null = null;

  @observable allCountryStat: ICountryMainStat[] | null = null;

  @observable countryTotalStat: ICountryTotalStat | null = null;

  @observable countryTimelineStat: ICountryDayStat[] | null = null;

  @observable selectedPropertyName = 'TotalConfirmed';

  @observable amount = 5;

  @observable currentCountryName: string | null = null;

  @action setCurrentCountryName = (countryName:string):void =>{
    this.currentCountryName = countryName;
  };

  @action setPropertyName = (propName: string): void => {
    this.selectedPropertyName = propName;
  };

  @action setAmount = (amount: number): void => {
    this.amount = amount;
  };

  @action loadSummaryStat = (): void => {
    api
      .loadGlobalStat()
      .then((res) => {
        this.globalStat = res.Global;
        this.allCountryStat = res.Countries;
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
    return (this.allCountryStat || []).map((element) => ({...element, key: element.code}));
  }

  @action countriesWithMostCases(propertyToBeSortedBy: string): Array<ICountryMainStat> {
    return (this.allCountryStat || []).slice().sort((countryElementFirst, countryElementSecond) => {
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
      {totalCases: [], totalDeaths: [], totalRecoveries: []},
    );
  }

  @computed get countryTotalCases(): ([string, number] | [])[] {
    return (this.allCountryStat || []).map((country) => {
      return country.CountryCode ? [country.CountryCode.toLowerCase(), country.TotalConfirmed] : [];
    });
  }
}

export default CountryStore;
