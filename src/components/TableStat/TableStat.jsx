import React from 'react';

import { Table } from 'antd';

import mock_data from '../../mock-data'

const TableStat = () => {

    const columns = [
        {
            title: 'Страна',
            dataIndex: 'title',
            width: 250,
            sorter: {
                compare: (a, b) => a.title < b.title ? -1 : 1,
                multiple: 3,
            },
        },
        {
            title: 'Всего заболевших',
            dataIndex: 'total_cases',
            width: 250,
            sorter: {
                compare: (a, b) => a.total_cases - b.total_cases,
                multiple: 3,
            },
        },
        {
            title: 'Всего выздоровевших',
            dataIndex: 'total_recovered',
            width: 250,
            sorter: {
                compare: (a, b) => a.total_recovered - b.total_recovered,
                multiple: 2,
            },
        },
        {
            title: 'Всего смертей',
            dataIndex: 'total_deaths',
            width: 250,
            sorter: {
                compare: (a, b) => a.total_deaths - b.total_deaths,
                multiple: 1,
            },
        },
    ];

    return (
        <React.Fragment>
            <Table
                columns={columns}
                dataSource={Object.values(mock_data).map((el) => { return { ...el, key: el.ourid } })}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: () => {
                            console.log(record)
                        }
                    }
                }}
            />
        </React.Fragment>
    )
}

export default TableStat;