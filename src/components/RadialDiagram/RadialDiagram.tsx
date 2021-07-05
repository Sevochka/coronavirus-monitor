import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ICountryTotalStat } from 'interfaces/ICountryTotalStat';
import { ICountryMainStat } from 'interfaces/ICountryMainStat';

type Props = {
  info: ICountryMainStat,
  items: Array<{
    title: string,
    color: string,
  }>,
};

const RadialDiagram: React.FC<Props> = ({ info, items }: Props) => {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      backgroundColor: 'rgba(0,0,0,0)',
    },
    title: {
      text: '',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
      },
    },
    series: [
      {
        name: 'Number',
        colorByPoint: true,
        data: [
          {
            name: items[0].title,
            y: info.TotalConfirmed,
            sliced: true,
            color: items[0].color,
          },
          {
            name: items[1].title,
            y: info.TotalDeaths,
            sliced: true,
            color: items[1].color,
          },
          {
            name: items[2].title,
            y: info.TotalRecovered,
            sliced: true,
            color: items[2].color,
          },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
export default RadialDiagram;
