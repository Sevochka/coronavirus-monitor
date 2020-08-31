import React from 'react';
import { useHistory } from 'react-router-dom';
import { Table } from 'antd';

import mock_global_stat from '../../mock-global-stat';

const TableStat = () => {

    const history = useHistory();

    const columns = [
        {
            title: 'Страна',
            dataIndex: 'title',
            width: '40%',
            sorter: {
                compare: (a, b) => (a.title < b.title ? -1 : 1),
                multiple: 3
            }
        },
        {
            title: 'Всего заболевших',
            dataIndex: 'total_cases',
            width: '20%',
            sorter: {
                compare: (a, b) => a.total_cases - b.total_cases,
                multiple: 3
            }
        },
        {
            title: 'Всего выздоровевших',
            dataIndex: 'total_recovered',
            width: '20%',
            sorter: {
                compare: (a, b) => a.total_recovered - b.total_recovered,
                multiple: 2
            }
        },
        {
            title: 'Всего смертей',
            dataIndex: 'total_deaths',
            width: '20%',
            sorter: {
                compare: (a, b) => a.total_deaths - b.total_deaths,
                multiple: 1
            }
        }
    ];

    return (
        <>
            <Table
                columns={columns}
                dataSource={Object.values(mock_global_stat).map(el => ({ ...el, key: el.ourid }))}
                onRow={record => ({
                    onClick: () => {
                        console.log(record);
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