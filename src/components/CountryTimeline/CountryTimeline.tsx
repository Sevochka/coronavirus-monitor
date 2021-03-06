import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {observer, inject} from 'mobx-react';

import WithLoading from 'hocs/WithLoading';
import CountryStore from 'store/CountryStore';
import RadialDiagram from 'components/RadialDiagram';
import TimelineGraph from 'components/TimelineGraph';
import TimelineDiagram from 'components/TimelineDiagram';
import {ICountryTotalStat} from 'interfaces/ICountryTotalStat';

import './CountryTimeline.scss';
import { ICountryMainStat } from 'interfaces/ICountryMainStat';

const ITEMS = [
  {title: 'Total cases', color: 'blue'},
  {
    title: 'Total deaths',
    color: 'red',
  },
  {title: 'Total recovered', color: 'green'},
];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const WithLoadingTimelineGraph = WithLoading(TimelineGraph);

type HocProps = {
  countryFullTimelineStat: { [name: string]: Array<[number, number]> },
};
const WithLoadingDiagrams = WithLoading(({countryFullTimelineStat}: HocProps) => (
  <div className="timeline-diagrams">
    {Object.values(countryFullTimelineStat).map((stat, index) => (
      <TimelineDiagram
        data={stat}
        color={ITEMS[index].color}
        title={ITEMS[index].title}
        key={ITEMS[index].title}
      />
    ))}
  </div>
));

type Props = {
  store?: CountryStore,
  info: ICountryMainStat,
};

type Params = {
  id: string,
};

const CountryTimeline: React.FC<Props> = inject('store')(
  observer(({store, info}: Props) => {
    const {id} = useParams<Params>();

    return (
      <div className="timeline">
        <div className="timeline-stat">
          <div className="timeline-stat__graph">
            <WithLoadingTimelineGraph isLoading={!!(store && !store.countryFullTimelineStat)} />
          </div>
          <div className="timeline-stat__radial">
             <RadialDiagram info={info} items={ITEMS} />
          </div>
        </div>
        {/* <WithLoadingDiagrams */}
        {/*  isLoading={!!(store && !store.countryTimelineStat)} */}
        {/*  countryFullTimelineStat={store && */}
        {/*                (store.countryTimelineStat ? store.countryFullTimelineStat : {})} */}
        {/* /> */}
        <br />
      </div>
    );
  }),
);

export default CountryTimeline;
