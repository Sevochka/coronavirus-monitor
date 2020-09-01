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

const TimelineGraph = props => {

    const { timeline } = props;

    const total_cases = [];
    const total_deaths = [];
    const total_recoveries = [];

    Object.keys(timeline).forEach(date => {
        total_cases.push({ x: new Date(date).getTime(), y: timeline[date].total_cases });
        total_deaths.push({ x: new Date(date).getTime(), y: timeline[date].total_deaths });
        total_recoveries.push({ x: new Date(date).getTime(), y: timeline[date].total_recoveries });

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
    timeline: PropTypes.object
};

export default TimelineGraph;