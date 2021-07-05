import {action, computed, observable} from 'mobx';

import {IMainStat} from 'interfaces/IMainStat';
import {ICountryMainStat} from 'interfaces/ICountryMainStat';

import * as api from 'api/country';
import { ICountryFullTimelineStat } from 'interfaces/ICountryFulllTimelineStat';

class CountryStore {
  @observable globalStat: IMainStat | null = null;

  @observable allCountryStat: ICountryMainStat[] | null = null;

  @observable countryTimelineStat: ICountryMainStat[] | null = null;

  @observable countryTotalStat: ICountryMainStat | null = null;

  @observable selectedPropertyName = 'TotalConfirmed';

  @observable amount = 5;

  @observable currentCountryName: string | null = null;

  @observable countryFullTimelineStat: ICountryFullTimelineStat | null = null;


  @action setCountryTotalStat = (countryCode: string):void =>{
    this.countryTotalStat = this.getCountryByCode(countryCode);
  };

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

  // @action loadCountryTotalStat = (countryCode: string): void => {
  //   api
  //     .loadCountryTotalStat(countryCode)
  //     .then((res) => {
  //       this.countryTotalStat = res;
  //     })
  //     .catch((error: Error) => error);
  // };

  @action loadCountryTimelineStat = (countryCode: string): void => {
    api
      .loadCountryTimelineStat(countryCode)
      .then((res) => {
        this.countryTimelineStat = res;
        this.loadCountryFullTimelineStat();
      })
      .catch((error: Error) => error);
  };
  @action loadCountryFullTimelineStat = (): void => {
    this.countryFullTimelineStat = this._countryFullTimelineStat;
  };

  @computed get tableData(): Array<ICountryMainStat> {
    return (this.allCountryStat || []).map((element) => ({...element, key: element.CountryCode}));
  }

  @action countriesWithMostCases(propertyToBeSortedBy: string): Array<ICountryMainStat> {
    return (this.allCountryStat || []).slice().sort((countryElementFirst, countryElementSecond) => {
      return (+countryElementSecond[propertyToBeSortedBy] -
                +countryElementFirst[propertyToBeSortedBy]);
    }).slice(0, this.amount);
  }

  @computed get _countryFullTimelineStat(): ICountryFullTimelineStat {
    return (this.countryTimelineStat || []).reduce<ICountryFullTimelineStat>(
      (stats: ICountryFullTimelineStat, element: ICountryMainStat) => {
        stats.totalCases.push([
          new Date(element.Date).getTime(),
          this.countryTimelineStat ? Math.ceil(+element.Confirmed) : 0,
        ]);
        stats.totalDeaths.push([
          new Date(element.Date).getTime(),
          this.countryTimelineStat ?  Math.ceil(+element.Deaths.toFixed()) : 0,
        ]);
        stats.totalRecoveries.push([
          new Date(element.Date).getTime(),
          this.countryTimelineStat ?  Math.ceil(+element.Recovered.toFixed()) : 0,
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

  @action getCountryByCode(code: string): ICountryMainStat | null{
    const countryCode = code.toUpperCase();
    const country = this.allCountryStat?.find((el) => el.CountryCode === countryCode);
    if (country) return country;
    return null;
  }

}

export default CountryStore;
