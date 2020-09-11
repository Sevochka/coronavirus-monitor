import React from 'react';
import {inject, observer} from 'mobx-react';
import CountryStore from "../../store/CountryStore";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";

type Props = {
    store: CountryStore;
}

const COLORS = ['blue', 'red', 'green'];

const TimelineGraph: React.FC<Props> = inject('store')(
    observer(({store}: Props) => {
        const options = {
            series: [
                {
                    name: 'Выявлено заболевших',
                    data: store.countryFullTimelineStat.totalCases,
                    color: 'blue'
                },
                {
                    name: 'Человек умерло',
                    data: store.countryFullTimelineStat.totalDeaths,
                    color: 'red'
                },
                {
                    name: 'Человек выздоровело',
                    data: store.countryFullTimelineStat.totalRecoveries,
                    color: 'green'
                }
            ]
        }
        return (<>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'stockChart'}
                    options={options}
                />
            </>
        )
    }),
);
export default TimelineGraph;

