import React from 'react';
import PropTypes from 'prop-types';
// import { useState, useEffect } from "react";

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from 'react-vis';

const TimelineGraph = (props) => {
  const { timeline } = props;

  const totalCases = [];
  const totalDeaths = [];
  const totalRecoveries = [];

  Object.keys(timeline).forEach((date) => {
    totalCases.push({
      x: new Date(date).getTime(),
      y: timeline[date].total_cases,
    });
    totalDeaths.push({
      x: new Date(date).getTime(),
      y: timeline[date].total_deaths,
    });
    totalRecoveries.push({
      x: new Date(date).getTime(),
      y: timeline[date].total_recoveries,
    });
  });

  return (
    <>
      <XYPlot xType="time" width={600} height={300} margin={{ left: 60, bottom: 50 }}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis tickLabelAngle={-45} />
        <YAxis />
        <LineSeries color="blue" data={totalCases} />
        <LineSeries color="red" data={totalDeaths} />
        <LineSeries color="green" data={totalRecoveries} />
      </XYPlot>
    </>
  );
};

TimelineGraph.propTypes = {
  timeline: PropTypes.oneOfType([PropTypes.object]),
};

TimelineGraph.defaultProps = {
  timeline: {},
};

export default TimelineGraph;
