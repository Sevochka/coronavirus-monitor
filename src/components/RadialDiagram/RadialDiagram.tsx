import React from 'react';
import {RadialChart} from 'react-vis';
import {ICountryTotalStat} from "interfaces/ICountryTotalStat";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

type Props = {
    info: ICountryTotalStat;
}

const RadialDiagram = ({info}: Props) => {

    const data = [
        {angle: +info.total_cases, color: 'blue'},
        {angle: +info.total_deaths, color: 'red'},
        {angle: +info.total_recovered, color: 'green'},
    ];

    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares in January, 2018'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Чел',
            colorByPoint: true,
            data: [
                {
                    name: "cases",
                    y: info.total_cases,
                    sliced: true,
                },
                {
                    name: "deaths",
                    y: info.total_deaths,
                    sliced: true,
                },
                {
                    name: "recoveries",
                    y: info.total_recovered,
                    sliced: true,
                }]
        }]
    }

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    );
};

export default RadialDiagram;
