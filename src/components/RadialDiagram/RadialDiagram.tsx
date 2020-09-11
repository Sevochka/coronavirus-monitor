import React from 'react';
import {RadialChart} from 'react-vis';
import {ICountryTotalStat} from "interfaces/ICountryTotalStat";

type Props = {
    info: ICountryTotalStat;
}

const RadialDiagram = ({info}: Props) => {

    const data = [
        {angle: +info.total_cases, color: 'blue'},
        {angle: +info.total_deaths, color: 'red'},
        {angle: +info.total_recovered, color: 'green'},
    ];

    return (
        <RadialChart
            width={300}
            height={300}
            data={data}
            colorType="literal"
            radius={120}
            innerRadius={80}
        />
    );
};

export default RadialDiagram;
