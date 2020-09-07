import columns from './columns';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Table } from 'antd';
import { inject, observer } from 'mobx-react';
import WithLoading from 'hocs/WithLoading';

import './TableStat.scss';

const WithLoadingTable = WithLoading(Table);

const TableStat = inject('store')(
  observer(({ store }) => {
    const history = useHistory();

    useEffect(() => {
      if (!store.allCountryStat) {
        store.loadAllCountryStat();
      }
    }, [store]);

    return (
      <>
        <WithLoadingTable
          isLoading={!store.allCountryStat}
          className="table"
          columns={columns}
          dataSource={store.allCountryStat ? store.tableData : []}
          onRow={(record) => ({
            onClick: () => {
              history.push(`/country/${record.code}`);
            },
          })}
          pagination={{ pageSize: 10, position: ['bottomCenter'], showSizeChanger: false }}
          size="small"
        />
      </>
    );
  }),
);

export default TableStat;
