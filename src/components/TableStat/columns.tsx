import React from 'react';

import { ICountryMainStat } from 'interfaces/ICountryMainStat';

const columns = [
  {
    title: 'Flag',
    dataIndex: 'code',
    width: '5%',
    render: (text: string): JSX.Element => (
      <span>
        <img
          alt="Flag"
          className="img-rounded"
          src={`https://www.countryflags.io/${text}/shiny/32.png`}
        />
      </span>
    ),
  },
  {
    title: 'Country',
    dataIndex: 'title',
    width: '16%',
    sorter: {
      compare: (a: ICountryMainStat, b: ICountryMainStat): number => (a.title < b.title ? -1 : 1),
      multiple: 3,
    },
  },
  {
    title: 'Total cases',
    dataIndex: 'totalCases',
    width: '14%',
    sorter: {
      compare: (a: ICountryMainStat, b: ICountryMainStat): number => +a.totalCases - +b.totalCases,
      multiple: 3,
    },
    render: (text: string): JSX.Element => <span style={{ color: 'blue' }}>{text}</span>,
  },
  {
    title: 'New cases today',
    dataIndex: 'totalNewCasesToday',
    width: '14%',
    sorter: {
      compare: (a: ICountryMainStat, b: ICountryMainStat): number =>
        +a.totalNewCasesToday - +b.totalNewCasesToday,
      multiple: 1,
    },
    render: (text: string): JSX.Element => <b style={{ color: 'blue' }}>{text}</b>,
  },
  {
    title: 'Total deaths',
    dataIndex: 'totalDeaths',
    width: '14%',
    sorter: {
      compare: (a: ICountryMainStat, b: ICountryMainStat): number =>
        +a.totalDeaths - +b.totalDeaths,
      multiple: 2,
    },
    render: (text: string): JSX.Element => <span style={{ color: 'red' }}>{text}</span>,
  },
  {
    title: 'New deaths today',
    dataIndex: 'totalNewDeathsToday',
    width: '14%',
    sorter: {
      compare: (a: ICountryMainStat, b: ICountryMainStat): number =>
        +a.totalNewDeathsToday - +b.totalNewDeathsToday,
      multiple: 1,
    },
    render: (text: string): JSX.Element => <b style={{ color: 'red' }}>{text}</b>,
  },
  {
    title: 'Total recovered',
    dataIndex: 'totalRecovered',
    width: '14%',
    sorter: {
      compare: (a: ICountryMainStat, b: ICountryMainStat): number =>
        +a.totalRecovered - +b.totalRecovered,
      multiple: 2,
    },
    render: (text: string): JSX.Element => <span style={{ color: 'green' }}>{text}</span>,
  },
  {
    title: 'Total serious cases',
    dataIndex: 'totalSeriousCases',
    width: '14%',
    sorter: {
      compare: (a: ICountryMainStat, b: ICountryMainStat): number =>
        +a.totalSeriousCases - +b.totalSeriousCases,
      multiple: 1,
    },
    render: (text: string): JSX.Element => <b>{text}</b>,
  },
];

export default columns;
