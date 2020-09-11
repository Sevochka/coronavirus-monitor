import React, {useEffect} from 'react';
import {DatePicker} from 'antd';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {DiscreteColorLegend} from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
import {observer, inject} from 'mobx-react';
import TimelineGraph from 'components/TimelineGraph';
import TimelineDiagram from 'components/TimelineDiagram';
import RadialDiagram from 'components/RadialDiagram';
import './CountryTimeline.scss';
import WithLoading from 'hocs/WithLoading';

const COLORS = ['blue', 'red', 'green'];
const ITEMS = [{title: 'Выявлено заболевших', color: 'blue'}, {
    title: 'Человек умерло',
    color: 'red'
}, {title: 'Человек выздоровело', color: 'green'}];

const WithLoadingTimelineGraph = WithLoading(TimelineGraph);

type HocProps = {
    countryMonthStat: { [name: string]: Array<[number,number]> }
}
const WithLoadingDiagrams = WithLoading(({countryMonthStat}: HocProps) => (
    <div className="timeline-diagrams">
        {Object.values(countryMonthStat).map((stat, index) => (
            <TimelineDiagram data={stat} color={COLORS[index]} key={COLORS[index]}/>
        ))}
    </div>
));

type Props = {
    [propName: string]: any
}

type Params = {
    id: string
}

const CountryTimeline: React.FC<Props> = inject('store')(
    observer(({store, info}: Props) => {
        const {id} = useParams<Params>();

        useEffect(() => {
            store.loadCountryTimelineStat(id);
        }, [id, store]);

        const onMonthChange = (date: moment.Moment | null) => {
            store.setCurrentMonth(date ? date.month() : 0);
        };

        return (
            <>
                <div className="timeline-stat">
                    <div className="timeline-stat__graph">
                        <WithLoadingTimelineGraph isLoading={!store.countryTimelineStat}/>
                    </div>
                    <div>
                        <RadialDiagram info={info}/>
                    </div>
                </div>
                <div className="timeline-panel">
                    <DatePicker onChange={onMonthChange} picker="month" className="timeline-panel__date"/>
                    <DiscreteColorLegend
                        className="timeline-panel__legend"
                        width={500}
                        items={ITEMS}
                        orientation="horizontal"
                    />
                </div>
                <WithLoadingDiagrams
                    isLoading={!store.countryTimelineStat}
                    countryMonthStat={store.countryTimelineStat ? store.countryFullTimelineStat : {}}
                />
                <br/>
            </>
        );
    }),
);

export default CountryTimeline;
