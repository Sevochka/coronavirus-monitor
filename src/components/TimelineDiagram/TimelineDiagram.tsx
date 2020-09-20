import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

type Props = {
  data: Array<[number, number]>,
  color: string,
  title: string,
};

const TimelineDiagram: React.FC<Props> = ({ data, color, title }: Props) => {
  const options = {
    chart: {
      alignTicks: false,
      backgroundColor: 'rgba(0,0,0,0)',
    },

    scrollbar: {
      enabled: false,
    },

    rangeSelector: {
      selected: 1,
    },

    title: {
      text: title,
    },

    colors: [color],

    series: [{
      type: 'column',
      name: title,
      data,
      dataGrouping: {
        units: [[
          'week', // unit name
          [1], // allowed multiples
        ], [
          'month',
          [1, 2, 3, 4, 6],
        ]],
      },
    },
    ],
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType="stockChart"
      options={options}
    />
  );
};

export default TimelineDiagram;
