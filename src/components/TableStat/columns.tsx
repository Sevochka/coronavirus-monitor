import React from 'react';

import {ICountryMainStat} from "interfaces/ICountryMainStat";

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
        dataIndex: 'total_cases',
        width: '14%',
        sorter: {
            compare: (a: ICountryMainStat, b: ICountryMainStat): number => +a.total_cases - +b.total_cases,
            multiple: 3,
        },
        render: (text: string): JSX.Element => <span style={{color: 'blue'}}>{text}</span>,
    },
    {
        title: 'Выявлено заболевших за сутки',
        dataIndex: 'total_new_cases_today',
        width: '14%',
        sorter: {
            compare: (a: ICountryMainStat, b: ICountryMainStat): number => +a.total_new_cases_today - +b.total_new_cases_today,
            multiple: 1,
        },
        render: (text: string): JSX.Element => <b style={{color: 'blue'}}>{text}</b>,
    },
    {
        title: 'Всего смертей',
        dataIndex: 'total_deaths',
        width: '14%',
        sorter: {
            compare: (a: ICountryMainStat, b: ICountryMainStat): number => +a.total_deaths - +b.total_deaths,
            multiple: 2,
        },
        render: (text: string): JSX.Element => <span style={{color: 'red'}}>{text}</span>,
    },
    {
        title: 'Человека умерло за сутки',
        dataIndex: 'total_new_deaths_today',
        width: '14%',
        sorter: {
            compare: (a: ICountryMainStat, b: ICountryMainStat): number => +a.total_new_deaths_today - +b.total_new_deaths_today,
            multiple: 1,
        },
        render: (text: string): JSX.Element => <b style={{color: 'red'}}>{text}</b>,
    },
    {
        title: 'Всего выздоровевших',
        dataIndex: 'total_recovered',
        width: '14%',
        sorter: {
            compare: (a: ICountryMainStat, b: ICountryMainStat): number => +a.total_recovered - +b.total_recovered,
            multiple: 2,
        },
        render: (text: string): JSX.Element => <span style={{color: 'green'}}>{text}</span>,
    },
    {
        title: 'В тяжелом состоянии',
        dataIndex: 'total_serious_cases',
        width: '14%',
        sorter: {
            compare: (a: ICountryMainStat, b: ICountryMainStat): number => +a.total_serious_cases - +b.total_serious_cases,
            multiple: 1,
        },
        render: (text: string): JSX.Element => <b>{text}</b>,
    },
];

export default columns;
