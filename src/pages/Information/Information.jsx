import React from 'react';
import { Collapse } from 'antd';

import './Information.scss';
import Prevention from 'components/Prevention/Prevention';
import Symptoms from 'components/Symptoms/Symptoms';
import Diagnostics from 'components/Diagnostics';
import Medication from 'components/Medication/Medication';

const { Panel } = Collapse;

const Information = () => (
  <Collapse accordion>
    <Panel header="Профилактика" key="1">
      <Prevention />
    </Panel>
    <Panel header="Симптомы" key="2">
      <Symptoms />
    </Panel>
    <Panel header="Диагностика" key="3">
      <Diagnostics />
    </Panel>
    <Panel header="Лечение" key="4">
      <Medication />
    </Panel>
  </Collapse>
);

export default Information;
