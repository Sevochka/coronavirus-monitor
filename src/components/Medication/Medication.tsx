import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const Medication: React.FC = () => (
  <Collapse accordion>
    <Panel header="Independent treatment" key="1">
      <p>
        If you feel ill, rest, drink plenty of fluids, and eat well.
        Stay in a separate room from other family members and use it whenever possible
        ‎separate toilet. Surfaces that you touch frequently should be used regularly
        to clean and disinfect.
      </p>
      <p>
        Stay at home and follow a healthy lifestyle. It is recommended to eat properly,
        observe proper sleep patterns, maintain physical activity, and use
        phone or Internet for communication with friends and family. During difficult periods,
        children they need special love and attention from adults. Try as much as possible
        stick to the same daily routine.
      </p>
      <p>
        In a crisis, sadness, stress, and confusion are normal emotions. Help with this
        trusting communication with family and friends can help. If you feel that you don&apos;t
        if you are coping with the situation, seek medical or social assistance
        ‎worker. ‎
      </p>
    </Panel>
    <Panel header="Medical examination" key="2">
      <p>
        If you have mild symptoms and no comorbidities, self-isolate at home and
        contact your doctor or call the COVID-19 hotline.
      </p>
      <p>
        If you have a fever, cough, or shortness of breath, seek medical attention.
        help. Call a doctor on the phone.
      </p>
    </Panel>
  </Collapse>
);

export default Medication;
