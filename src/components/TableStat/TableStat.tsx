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

const TableStat: React.FC = inject('store')(
    observer(({store}: Props) => {
        const history = useHistory();

        return (
            <>
                <WithLoadingTable
                    isLoading={!store.allCountryStat}
                    scroll={{
                        x: "50vw"
                        }
                    }
                    size="middle"
                    className="table"
                    columns={columns}
                    bordered={true}
                    dataSource={store.allCountryStat ? store.tableData : []}
                    onRow={(record: ICountryMainStat) => ({
                        onClick: () => {
                            history.push(`/country/${record.code}`);
                        },
                    })}
                    pagination={{pageSize: 10, position: ['bottomCenter'], showSizeChanger: false}}
                />
            </>
        );
    }),
);

export default TableStat;
