import React from 'react';
import { Table } from 'antd';
import { useHistory } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import columns from './columns';
import WithLoading from 'hocs/WithLoading';
import CountryStore from 'store/CountryStore';
import { ICountryMainStat } from 'interfaces/ICountryMainStat';

import './TableStat.scss';

const WithLoadingTable = WithLoading(Table);

type Props = {
  store?: CountryStore,
};
const TableStat: React.FC<Props> = inject('store')(
  observer(({ store }: Props) => {
    const history = useHistory();

    return (
      <>
        <WithLoadingTable
          isLoading={!!(store && !store.allCountryStat)}
          scroll={{
            x: '50vw',
          }}
          size="middle"
          className="table"
          columns={columns}
          bordered
          dataSource={store && (store.allCountryStat ? store.tableData : [])}
          onRow={(record: ICountryMainStat) => ({
            onClick: () => {
              store?.setCurrentCountryName(record.title);
              history.push(`/country/${record.CountryCode}/`);
            },
          })}
          pagination={{ pageSize: 10, position: ['bottomCenter'], showSizeChanger: false }}
        />
      </>
    );
  }),
);

export default TableStat;
