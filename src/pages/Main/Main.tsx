import React from 'react';
import {inject, observer} from 'mobx-react';
import WithLoading from 'hocs/WithLoading';
import CardMainStat from 'components/MainStatistic';
import WorldMap from 'components/WorldMap';
import CountryStore from "../../store/CountryStore";

const WithLoadingCardMainStat = WithLoading(CardMainStat);

const WithLoadingWorldMap = WithLoading(WorldMap);

type Props = {
    store: CountryStore;
}
const Main: React.FC<Props> = inject('store')(
    observer(({store}: Props) => (
        <>
            <WithLoadingCardMainStat isLoading={!store.globalStat} info={store.globalStat}/>
            <hr/>
            <WithLoadingWorldMap isLoading={!store.allCountryStat}/>
        </>
    )),
);

export default Main;
