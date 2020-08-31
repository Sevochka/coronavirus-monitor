import React from "react";
import { DatePicker } from 'antd';
import '../../../node_modules/react-vis/dist/style.css';
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries,
    DiscreteColorLegend,
} from 'react-vis';

import mock_country_timeline from "../../mock-country-timeline";

import "./CountryTimeline.css"
import { useState } from "react";

const dates = Object.keys(mock_country_timeline);
const COLORS = ["blue", "red", "green"]
const ITEMS = ["Total cases", "Total Deaths", "Total recoveries"]


const CountryTimeline = () => {

    const [currentMonth, setCurrenMonth] = useState("")

    function onMonthChange(date) {
        setCurrenMonth(date ? date.month() : "")
    }

    const total_cases = [];
    const total_deaths = [];
    const total_recoveries = [];

    dates
        .filter(date => !currentMonth || currentMonth === new Date(date).getMonth())
        .forEach(date => {
            total_cases.push({ x: new Date(date).getTime(), y: mock_country_timeline[date].total_cases })
            total_deaths.push({ x: new Date(date).getTime(), y: mock_country_timeline[date].total_deaths })
            total_recoveries.push({ x: new Date(date).getTime(), y: mock_country_timeline[date].total_recoveries })
        })

    return (
        <>
            <DatePicker onChange={onMonthChange} picker="month" />
            <XYPlot xType="time" width={550} height={300} margin={{ left: 60, bottom: 50 }}>
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
                <DiscreteColorLegend
                    className="color-legend"
                    height={200}
                    width={300}
                    items={ITEMS}
                    colors={COLORS}
                    orientation="horizontal" />
            </XYPlot>
            <br />
        </>
    );
};

export default CountryTimeline;