import React from 'react';

import { inject } from 'mobx-react';
import CountryStore from '../../store/CountryStore';
import TableStat from 'components/TableStat';

type Props = {
  store?: CountryStore,
};

const Statistic: React.FC = () => (
  <>
    <TableStat store={} />
  </>
);

export default Statistic;
