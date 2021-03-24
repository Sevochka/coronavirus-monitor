import React from 'react';
import { inject, observer } from 'mobx-react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import CountryStore from 'store/CountryStore';

type Props = {
  store: CountryStore;
};

const TimelineGraph: React.FC<Props> = inject('store')(
  observer(({ store }: Props) => {
    const options = {
      chart: {
        backgroundColor: 'rgba(0,0,0,0)',
        height: 400
      },
      plotOptions: {
        series: {
          compare: 'percent',
          showInNavigator: true,
        },
      },
      scrollbar: {
        barBackgroundColor: 'lightgray',
        barBorderRadius: 7,
        barBorderWidth: 0,
        buttonBackgroundColor: 'lightgray',
        buttonBorderWidth: 0,
        buttonBorderRadius: 7,
        trackBackgroundColor: 'none',
        trackBorderWidth: 1,
        trackBorderRadius: 8,
        trackBorderColor: '#CCC',
      },
      series: [
        {
          name: 'Total cases',
          data: store.countryFullTimelineStat.totalCases,
          color: 'blue',
        },
        {
          name: 'Total deaths',
          data: store.countryFullTimelineStat.totalDeaths,
          color: 'red',
        },
        {
          name: 'Total recoveries',
          data: store.countryFullTimelineStat.totalRecoveries,
          color: 'green',
        },
      ],
    };
    return (
      <>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType="stockChart"
          containerProps={{ style: { height: '100%' } }}
          options={options}
        />
      </>
    );
  }),
);
export default TimelineGraph;
