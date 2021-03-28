import React from 'react';

import { ICountryMainStat } from 'interfaces/ICountryMainStat';

const columns = [
  {
    title: 'Flag',
    dataIndex: 'CountryCode',
    width: '5%',
    render: (CountryCode: string): JSX.Element => (
      <span>
        <img
          alt="Flag"
          className="img-rounded"
          src={`https://www.countryflags.io/${CountryCode}/shiny/32.png`}
        />
      </span>
    ),
  },
  {
    title: 'Country',
    dataIndex: 'Country',
    width: '16%',
    sorter: {
      compare:
        (a: ICountryMainStat, b: ICountryMainStat): number => (a.Country < b.Country ? -1 : 1),
      multiple: 3,
    },
  },
  {
    title: 'Total cases',
    dataIndex: 'TotalConfirmed',
    width: '14%',
    sorter: {
      compare:
        (a: ICountryMainStat, b: ICountryMainStat): number => +a.TotalConfirmed - +b.TotalConfirmed,
      multiple: 3,
    },
    render: (text: string): JSX.Element => <span style={{ color: 'blue' }}>{text}</span>,
  },
  {
    title: 'New cases today',
    dataIndex: 'NewConfirmed',
    width: '14%',
    sorter: {
      compare: (a: ICountryMainStat, b: ICountryMainStat): number =>
        +a.NewConfirmed - +b.NewConfirmed,
      multiple: 1,
    },
    render: (text: string): JSX.Element => <b style={{ color: 'blue' }}>{text}</b>,
  },
  {
    title: 'Total deaths',
    dataIndex: 'TotalDeaths',
    width: '14%',
    sorter: {
      compare: (a: ICountryMainStat, b: ICountryMainStat): number =>
        +a.TotalDeaths - +b.TotalDeaths,
      multiple: 2,
    },
    render: (text: string): JSX.Element => <span style={{ color: 'red' }}>{text}</span>,
  },
  {
    title: 'New deaths today',
    dataIndex: 'NewDeaths',
    width: '14%',
    sorter: {
      compare: (a: ICountryMainStat, b: ICountryMainStat): number =>
        +a.NewDeaths - +b.NewDeaths,
      multiple: 1,
    },
    render: (text: string): JSX.Element => <b style={{ color: 'red' }}>{text}</b>,
  },
  {
    title: 'Total recovered',
    dataIndex: 'TotalRecovered',
    width: '14%',
    sorter: {
      compare: (a: ICountryMainStat, b: ICountryMainStat): number =>
        +a.TotalRecovered - +b.TotalRecovered,
      multiple: 2,
    },
    render: (text: string): JSX.Element => <span style={{ color: 'green' }}>{text}</span>,
  },
  {
    title: 'New Total recovered',
    dataIndex: 'NewRecovered',
    width: '14%',
    sorter: {
      compare: (a: ICountryMainStat, b: ICountryMainStat): number =>
        +a.NewRecovered - +b.NewRecovered,
      multiple: 1,
    },
    render: (text: string): JSX.Element => <b>{text}</b>,
  },
];

export default columns;
