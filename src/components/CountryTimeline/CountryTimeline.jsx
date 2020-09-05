import React, { useEffect, useState } from 'react';
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
    const [currentMonth, setCurrenMonth] = useState(7);
    const { id } = useParams();

    useEffect(() => {
      if (!store.countryTimelineStat) {
        store.loadCountryTimelineStat(id);
      }
    }, [id, store]);

    const onMonthChange = (date) => {
      setCurrenMonth(date ? date.month() : 0);
    };
    const totalCases = [];
    const totalDeaths = [];
    const totalRecoveries = [];

    if (store.countryTimelineStat) {
      Object.keys(store.countryTimelineStat)
        .filter((date) => !currentMonth || currentMonth === new Date(date).getMonth())
        .forEach((date) => {
          totalCases.push({
            x: new Date(date).getTime(),
            y: store.countryTimelineStat[date].total_cases,
          });
          totalDeaths.push({
            x: new Date(date).getTime(),
            y: store.countryTimelineStat[date].total_deaths,
          });
          totalRecoveries.push({
            x: new Date(date).getTime(),
            y: store.countryTimelineStat[date].total_recoveries,
          });
        });
    }

    return (
      <>
        <div className="timeline-stat">
          <div className="timeline-stat__graph">
            {store.countryTimelineStat ? (
              <TimelineGraph timeline={store.countryTimelineStat} />
            ) : null}
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
            <TimelineDiagram data={totalCases} color="blue" className="diagram" />
            <TimelineDiagram data={totalDeaths} color="red" className="diagram" />
            <TimelineDiagram data={totalRecoveries} color="green" className="diagram" />
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
