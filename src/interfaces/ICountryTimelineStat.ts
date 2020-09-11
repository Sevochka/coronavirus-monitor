import {ICountryDayStat} from "./ICountryDayStat";

export interface ICountryTimelineStat {
    [propType: string]: ICountryDayStat
}