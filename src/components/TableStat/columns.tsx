import React from 'react';

import { ICountryMainStat } from 'interfaces/ICountryMainStat';

const columns = [
  {
    title: 'Страна',
    dataIndex: 'title',
    width: '16%',
    sorter: {
      compare: (a: ICountryMainStat, b: ICountryMainStat): number => (a.title < b.title ? -1 : 1),
      multiple: 3,
    },
  },
  {
    title: 'Всего заболевших',
    dataIndex: 'totalCases',
    width: '14%',
    sorter: {
      compare: (a: ICountryMainStat, b: ICountryMainStat): number => +a.totalCases - +b.totalCases,
      multiple: 3,
    },
    render: (text: string): JSX.Element => <span style={{ color: 'blue' }}>{text}</span>,
  },
  {
    title: 'Выявлено заболевших за сутки',
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
    title: 'Всего смертей',
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
    title: 'Человека умерло за сутки',
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
    title: 'Всего выздоровевших',
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
    title: 'В тяжелом состоянии',
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
