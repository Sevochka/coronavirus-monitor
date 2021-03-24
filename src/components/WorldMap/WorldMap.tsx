import React from 'react';
import Highcharts from 'highcharts';
import { inject, observer } from 'mobx-react';
import HighchartsReact from 'highcharts-react-official';
import highchartsModuleMap from 'highcharts/modules/map';

import mapData from './mapData';
import CountryStore from 'store/CountryStore';

highchartsModuleMap(Highcharts);
type Props = {
  store: CountryStore,
};

const WorldMap: React.FC<Props> = inject('store')(
  observer(({ store }: Props) => {
    const mapOptions = {
      title: {
        text: '',
      },
      colors: [
        'rgba(19,64,117,0.05)',
        'rgba(19,64,117,0.2)',
        'rgba(19,64,117,0.4)',
        'rgba(19,64,117,0.5)',
        'rgba(19,64,117,0.6)',
        'rgba(19,64,117,0.8)',
      ],
      colorAxis: {
        dataClasses: [
          {
            to: 100000,
          },
          {
            from: 100000,
            to: 500000,
          },
          {
            from: 500000,
            to: 1000000,
          },
          {
            from: 1000000,
            to: 2000000,
          },
          {
            from: 2000000,
            to: 5000000,
          },
          {
            from: 5000000,
          },
        ],
      },
      legend: {
        layout: 'horizontal',
        borderWidth: 0,
        floating: true,
        verticalAlign: 'top',
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom',
        },
      },
      chart: {
        backgroundColor: 'rgba(0,0,0,0)',
        height: 800,
      },
      series: [
        {
          mapData,
          name: 'Total cases',
          data: store.countryTotalCases,
          states: {
            hover: {
              color: '#ffff00', // '#34baeb',
            },
          },
          borderColor: 'black',
          borderWidth: 0.2,
        },
      ],
    };
    return (
      <div>
        <HighchartsReact options={mapOptions} constructorType="mapChart" highcharts={Highcharts} />
      </div>
    );
  }),
);

export default WorldMap;
