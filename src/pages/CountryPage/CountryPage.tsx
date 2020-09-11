import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import MainStatistic from 'components/MainStatistic';
import CountryTimeline from 'components/CountryTimeline';
import CountryStore from "../../store/CountryStore";

type Props = {
    store: CountryStore;
}

type Params = {
    id: string
}

const CountryPage: React.FC<Props> = inject('store')(
    observer(({store}: Props) => {
        const {id} = useParams<Params>();

        useEffect(() => {
            store.loadCountryTotalStat(id);
        }, [id, store]);

        return (
            <>
                <h4>{id}</h4>
                {store.countryTotalStat ? (
                    <>
                        <MainStatistic info={store.countryTotalStat}/>
                        <CountryTimeline info={store.countryTotalStat}/>
                    </>
                ) : null}
            </>
        );
    }),
);

export default CountryPage;
