import columns from './columns';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Table } from 'antd';
import { inject, observer } from 'mobx-react';

import './TableStat.scss';

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
        {store.allCountryStat ? (
          <Table
            className="table"
            columns={columns}
            dataSource={store.tableData}
            onRow={(record) => ({
              onClick: () => {
                history.push(`/country/${record.code}`);
              },
            })}
            pagination={{ pageSize: 10, position: ['bottomCenter'], showSizeChanger: false }}
            size="small"
          />
        ) : null}
      </>
    );
  }),
);

export default TableStat;
