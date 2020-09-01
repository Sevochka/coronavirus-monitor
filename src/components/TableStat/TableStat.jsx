import React from 'react';
import { useHistory } from 'react-router-dom';
import { Table } from 'antd';

import mock_global_stat from '../../mock-global-stat';

import "./TableStat.css";

const TableStat = () => {

    const history = useHistory();

    const columns = [
        {
            title: 'Страна',
            dataIndex: 'title',
            width: '16%',
            sorter: {
                compare: (a, b) => (a.title < b.title ? -1 : 1),
                multiple: 3
            }
        },
        {
            title: 'Всего заболевших',
            dataIndex: 'total_cases',
            width: '14%',
            sorter: {
                compare: (a, b) => a.total_cases - b.total_cases,
                multiple: 3
            },
            render: text => <span style={{ color: "blue" }}>{text}</span>
        },
        {
            title: 'Выявлено заболевших за сутки',
            dataIndex: 'total_new_cases_today',
            width: '14%',
            sorter: {
                compare: (a, b) => a.total_new_cases_today - b.total_new_cases_today,
                multiple: 1
            },
            render: text => <b style={{ color: "blue" }}>{text}</b>
        },
        {
            title: 'Всего смертей',
            dataIndex: 'total_deaths',
            width: '14%',
            sorter: {
                compare: (a, b) => a.total_deaths - b.total_deaths,
                multiple: 2
            },
            render: text => <span style={{ color: "red" }}>{text}</span>
        },
        {
            title: 'Человека умерло за сутки',
            dataIndex: 'total_new_deaths_today',
            width: '14%',
            sorter: {
                compare: (a, b) => a.total_new_deaths_today - b.total_new_deaths_today,
                multiple: 1
            },
            render: text => <b style={{ color: "red" }}>{text}</b>
        },
        {
            title: 'Всего выздоровевших',
            dataIndex: 'total_recovered',
            width: '14%',
            sorter: {
                compare: (a, b) => a.total_recovered - b.total_recovered,
                multiple: 2
            },
            render: text => <span style={{ color: "green" }}>{text}</span>
        },
        {
            title: 'В тяжелом состоянии',
            dataIndex: 'total_serious_cases',
            width: '14%',
            sorter: {
                compare: (a, b) => a.total_serious_cases - b.total_serious_cases,
                multiple: 1
            },
            render: text => <b >{text}</b>
        }
    ];

    return (
        <>
            <Table
                className="table"
                columns={columns}
                dataSource={Object.values(mock_global_stat).map(el => ({ ...el, key: el.ourid }))}
                onRow={record => ({
                    onClick: () => {
                        history.push('/country/US');
                    }
                })}
                pagination={{ pageSize: 10, position: ["bottomCenter"], showSizeChanger: false }}
                size="small"
            />
        </>
    );
};

export default TableStat;