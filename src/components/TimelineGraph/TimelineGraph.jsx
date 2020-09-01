import React from 'react';
import PropTypes from 'prop-types';
// import { useState, useEffect } from "react";

import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries
} from 'react-vis';

import mock_country_timeline from '../../mock-country-timeline';

const TimelineGraph = props => {

    const { data } = props;

    const total_cases = [];
    const total_deaths = [];
    const total_recoveries = [];

    data.forEach(date => {
        total_cases.push({ x: new Date(date).getTime(), y: mock_country_timeline[date].total_cases });
        total_deaths.push({ x: new Date(date).getTime(), y: mock_country_timeline[date].total_deaths });
        total_recoveries.push({ x: new Date(date).getTime(), y: mock_country_timeline[date].total_recoveries });

    });

    return (
        <>
            <XYPlot xType="time" width={600} height={300} margin={{ left: 60, bottom: 50 }}>
                <HorizontalGridLines />
                <VerticalGridLines />
                <XAxis tickLabelAngle={-45} />
                <YAxis />
                <LineSeries
                    color="blue"
                    data={total_cases}
                />
                <LineSeries
                    color="red"
                    data={total_deaths}
                />
                <LineSeries
                    color="green"
                    data={total_recoveries}
                />
            </XYPlot>
        </>
    );
};

TimelineGraph.propTypes = {
    data: PropTypes.object
};

export default TimelineGraph;