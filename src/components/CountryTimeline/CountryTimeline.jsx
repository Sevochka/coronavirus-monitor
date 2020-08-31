import React from "react";
import { useState } from "react";
import { DatePicker } from 'antd';
import '../../../node_modules/react-vis/dist/style.css';
import {
    DiscreteColorLegend,
} from 'react-vis';

import mock_country_timeline from "../../mock-country-timeline";
import TimelineDiagram from "../TimelineDiagram";

import "./CountryTimeline.css";

const dates = Object.keys(mock_country_timeline);
const COLORS = ["blue", "red", "green"];
const ITEMS = ["Total cases", "Total Deaths", "Total recoveries"];

const CountryTimeline = () => {

    const [currentMonth, setCurrenMonth] = useState(7)

    const onMonthChange = date => {
        setCurrenMonth(date ? date.month() : 0)
    }

    const total_cases = [];
    const total_deaths = [];
    const total_recoveries = [];

    dates
        .filter(date => !currentMonth || currentMonth === new Date(date).getMonth())
        .forEach(date => {
            total_cases.push({ x: new Date(date).getTime(), y: mock_country_timeline[date].total_cases });
            total_deaths.push({ x: new Date(date).getTime(), y: mock_country_timeline[date].total_deaths });
            total_recoveries.push({ x: new Date(date).getTime(), y: mock_country_timeline[date].total_recoveries });
        });

    return (
        <>
            <div className="timeline__panel">
                <DatePicker onChange={onMonthChange} picker="month" />
                <DiscreteColorLegend
                    className="color-legend"
                    width={300}
                    items={ITEMS}
                    colors={COLORS}
                    orientation="horizontal" />
            </div>
            <div className="timeline__diagrams">
                <TimelineDiagram data={total_cases} color="blue" month={currentMonth} className="diagram" />
                <TimelineDiagram data={total_deaths} color="red" month={currentMonth} className="diagram" />
                <TimelineDiagram data={total_recoveries} color="green" month={currentMonth} className="diagram" />
            </div>
            <br />
        </>
    );
};

export default CountryTimeline;