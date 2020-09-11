import React from 'react';
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries,
} from 'react-vis';
import {inject, observer} from 'mobx-react';
import CountryStore from "../../store/CountryStore";

type Props = {
    store: CountryStore;
}

const COLORS = ['blue', 'red', 'green'];

const TimelineGraph: React.FC<Props> = inject('store')(
    observer(({store}: Props) => (
        <>
            <XYPlot xType="time" width={600} height={300} margin={{left: 60, bottom: 50}}>
                <HorizontalGridLines/>
                <VerticalGridLines/>
                <XAxis tickLabelAngle={-45}/>
                <YAxis/>
                {Object.values(store.countryFullTimelineStat).map((stat, index) => (
                    <LineSeries color={COLORS[index]} data={stat} key={COLORS[index]}/>
                ))}
            </XYPlot>
        </>
    )),
);
export default TimelineGraph;
