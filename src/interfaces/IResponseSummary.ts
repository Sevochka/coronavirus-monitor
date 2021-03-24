import { IMainStat } from 'interfaces/IMainStat';
import { ICountryMainStat } from 'interfaces/ICountryMainStat';

export interface IResponseSummary{
  ID:string,
  Message:string,
  Global:IMainStat,
  Countries: ICountryMainStat[]
}