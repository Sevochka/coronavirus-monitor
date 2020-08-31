import React from 'react';

import { Table } from 'antd';

import mock_global_stat from '../../mock-global-stat'

const TableStat = () => {

    const columns = [
        {
            title: 'Страна',
            dataIndex: 'title',
            width: '40%',
            sorter: {
                compare: (a, b) => a.title < b.title ? -1 : 1,
                multiple: 3,
            },
        },
        {
            title: 'Всего заболевших',
            dataIndex: 'total_cases',
            width: '20%',
            sorter: {
                compare: (a, b) => a.total_cases - b.total_cases,
                multiple: 3,
            },
        },
        {
            title: 'Всего выздоровевших',
            dataIndex: 'total_recovered',
            width: '20%',
            sorter: {
                compare: (a, b) => a.total_recovered - b.total_recovered,
                multiple: 2,
            },
        },
        {
            title: 'Всего смертей',
            dataIndex: 'total_deaths',
            width: '20%',
            sorter: {
                compare: (a, b) => a.total_deaths - b.total_deaths,
                multiple: 1,
            },
        },
    ];

    return (
        <>
            <Table
                columns={columns}
                dataSource={Object.values(mock_global_stat).map((el) => { return { ...el, key: el.ourid } })}
                onRow={(record) => {
                    return {
                        onClick: () => {
                            console.log(record)
                        }
                    }
                }}
                pagination={{ pageSize: 10, position: ["bottomCenter"], showSizeChanger: false }}
                size="small"
            />
        </>
    )
}

export default TableStat;