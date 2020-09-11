import React from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";

const TimelineDiagram = ({data, color}) => {
console.log(data)
    const options = {
            chart: {
                alignTicks: false
            },

            rangeSelector: {
                selected: 1
            },

            title: {
                text: 'AAPL Stock Volume'
            },

            colors: [color],

            series: [{
                type: 'column',
                name: 'AAPL Stock Volume',
                data: data,
                dataGrouping: {
                    units: [[
                        'week', // unit name
                        [1] // allowed multiples
                    ], [
                        'month',
                        [1, 2, 3, 4, 6]
                    ]]
                }
            }
            ]
        }
    ;

    return (
        <>
            <>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'stockChart'}
                    options={options}
                />
            </>
        </>
    );
};

export default TimelineDiagram;
