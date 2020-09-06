import React, { useEffect } from 'react';
import { DatePicker } from 'antd';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { DiscreteColorLegend } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
import TimelineGraph from 'components/TimelineGraph';
import TimelineDiagram from 'components/TimelineDiagram';
import RadialDiagram from 'components/RadialDiagram';
import './CountryTimeline.scss';
import { observer, inject } from 'mobx-react';

const COLORS = ['blue', 'red', 'green'];
const ITEMS = ['Выявлено заболевших', 'Человек умерло', 'Человек выздоровело'];

const CountryTimeline = inject('store')(
  observer(({ store, info }) => {
    const { id } = useParams();

    useEffect(() => {
      store.loadCountryTimelineStat(id);
    }, [id, store]);

    const onMonthChange = (date) => {
      store.setCurrentMonth(date ? date.month() : 0);
    };

    return (
      <>
        <div className="timeline-stat">
          <div className="timeline-stat__graph">
            {store.countryTimelineStat ? <TimelineGraph /> : null}
          </div>
          <div>
            <RadialDiagram info={info} />
          </div>
        </div>
        {store.countryTimelineStat ? (
          <div className="timeline-panel">
            <DatePicker onChange={onMonthChange} picker="month" className="timeline-panel__date" />
            <DiscreteColorLegend
              className="timeline-panel__legend"
              width={500}
              items={ITEMS}
              colors={COLORS}
              orientation="horizontal"
            />
          </div>
        ) : null}
        {store.countryTimelineStat ? (
          <div className="timeline-diagrams">
            {Object.values(store.countryMonthStat).map((stat, index) => (
              <TimelineDiagram
                data={stat}
                color={COLORS[index]}
                className="diagram"
                key={COLORS[index]}
              />
            ))}
          </div>
        ) : null}
        <br />
      </>
    );
  }),
);

CountryTimeline.propTypes = {
  info: PropTypes.oneOfType([PropTypes.object]),
};

CountryTimeline.defaultProps = {
  info: {},
};

export default CountryTimeline;
