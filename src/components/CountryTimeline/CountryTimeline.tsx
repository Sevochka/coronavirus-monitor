import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {observer, inject} from 'mobx-react';
import '../../../node_modules/react-vis/dist/style.css';

import WithLoading from 'hocs/WithLoading';
import RadialDiagram from 'components/RadialDiagram';
import TimelineGraph from 'components/TimelineGraph';
import TimelineDiagram from 'components/TimelineDiagram';

import './CountryTimeline.scss';

const ITEMS = [{title: 'Выявлено заболевших', color: 'blue'}, {
    title: 'Человек умерло',
    color: 'red'
}, {title: 'Человек выздоровело', color: 'green'}];

const WithLoadingTimelineGraph = WithLoading(TimelineGraph);

type HocProps = {
    countryFullTimelineStat: { [name: string]: Array<[number, number]> }
}
const WithLoadingDiagrams = WithLoading(({countryFullTimelineStat}: HocProps) => (
    <div className="timeline-diagrams">
        {Object.values(countryFullTimelineStat).map((stat, index) => (
            <TimelineDiagram data={stat} color={ITEMS[index].color} title={ITEMS[index].title}
                             key={ITEMS[index].title}/>
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

        return (
            <>
                <div className="timeline-stat">
                    <div className="timeline-stat__graph">
                        <WithLoadingTimelineGraph isLoading={!store.countryTimelineStat}/>
                    </div>
                    <div>
                        <RadialDiagram info={info} items={ITEMS}/>
                    </div>
                </div>
                <WithLoadingDiagrams
                    isLoading={!store.countryTimelineStat}
                    countryFullTimelineStat ={store.countryTimelineStat ? store.countryFullTimelineStat : {}}
                />
                <br/>
            </>
        );
    }),
);

export default CountryTimeline;