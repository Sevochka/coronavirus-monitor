import React, { useEffect } from 'react';
import { DatePicker } from 'antd';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { DiscreteColorLegend } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
import { observer, inject } from 'mobx-react';
import TimelineGraph from 'components/TimelineGraph';
import TimelineDiagram from 'components/TimelineDiagram';
import RadialDiagram from 'components/RadialDiagram';
import './CountryTimeline.scss';
import WithLoading from 'hocs/WithLoading';

const COLORS = ['blue', 'red', 'green'];
const ITEMS = ['Выявлено заболевших', 'Человек умерло', 'Человек выздоровело'];

const WithLoadingTimelineGraph = WithLoading(TimelineGraph);
const WithLoadingDiagrams = WithLoading(({ countryMonthStat }) => (
  <div className="timeline-diagrams">
    {Object.values(countryMonthStat).map((stat, index) => (
      <TimelineDiagram data={stat} color={COLORS[index]} className="diagram" key={COLORS[index]} />
    ))}
  </div>
));

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
            <WithLoadingTimelineGraph isLoading={!store.countryTimelineStat} />
          </div>
          <div>
            <RadialDiagram info={info} />
          </div>
        </div>
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
        <WithLoadingDiagrams
          isLoading={!store.countryTimelineStat}
          countryMonthStat={store.countryTimelineStat ? store.countryMonthStat : {}}
        />
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
