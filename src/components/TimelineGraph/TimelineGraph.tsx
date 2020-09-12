import React from 'react';
import {inject, observer} from 'mobx-react';
import CountryStore from "../../store/CountryStore";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";

type Props = {
    store: CountryStore;
}

const TimelineGraph: React.FC<Props> = inject('store')(
    observer(({store}: Props) => {
        const options = {
            chart: {
                backgroundColor: 'rgba(0,0,0,0)',
            },
            plotOptions: {
                series: {
                    compare: 'percent',
                    showInNavigator: true
                }
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
                trackBorderColor: '#CCC'
            },
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

