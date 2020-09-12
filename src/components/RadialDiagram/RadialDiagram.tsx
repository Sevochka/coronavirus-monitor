import React from 'react';
import {RadialChart} from 'react-vis';
import {ICountryTotalStat} from "interfaces/ICountryTotalStat";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

type Props = {
    info: ICountryTotalStat;
    items: Array<{
        title: string,
        color: string,
    }>
}

const RadialDiagram = ({info, items}: Props) => {
        const options = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                backgroundColor: 'rgba(0,0,0,0)',
            },
            title: {
                text: ''
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
                name: 'Кол-во',
                colorByPoint: true,
                data: [
                    {
                        name: items[0].title,
                        y: info.totalCases,
                        sliced: true,
                        color: items[0].color
                    },
                    {
                        name: items[1].title,
                        y: info.totalDeaths,
                        sliced: true,
                        color: items[1].color
                    },
                    {
                        name: items[2].title,
                        y: info.totalRecovered,
                        sliced: true,
                        color: items[2].color
                    }]
            }]
        }

        return (
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        );
    }
;

export default RadialDiagram;
