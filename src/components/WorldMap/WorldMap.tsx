import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {inject, observer} from 'mobx-react';
import mapData from './mapData';

import CountryStore from "store/CountryStore";
// Load Highcharts modules
require('highcharts/modules/map')(Highcharts);

type Props = {
    store: CountryStore
}

const WorldMap: React.FC<Props> = inject('store')(
    observer(({store}: Props) => {
        const mapOptions = {
            title: {
                text: '',
            },
            colorAxis: {
                minColor: '#00ff00',
                maxColor: '#ff0000',
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
                <HighchartsReact options={mapOptions} constructorType="mapChart" highcharts={Highcharts}/>
            </div>
        );
    }),
);

export default WorldMap;
