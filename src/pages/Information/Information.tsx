import React from 'react';
import { Collapse } from 'antd';

import './Information.scss';
import Prevention from 'components/Prevention/Prevention';
import Symptoms from 'components/Symptoms/Symptoms';
import Diagnostics from 'components/Diagnostics';
import Medication from 'components/Medication/Medication';

const { Panel } = Collapse;

const Information: React.FC = () => (
  <Collapse accordion>
    <Panel header="Prevention" key="1">
      <Prevention />
    </Panel>
    <Panel header="Symptoms" key="2">
      <Symptoms />
    </Panel>
    <Panel header="Diagnostics" key="3">
      <Diagnostics />
    </Panel>
    <Panel header="Medication" key="4">
      <Medication />
    </Panel>
  </Collapse>
);

export default Information;
