import React from 'react';
import PropTypes from 'prop-types';
import { RadialChart } from 'react-vis';

const RadialDiagram = props => {
    const { info } = props;

    const data = [
        { angle: info.total_cases, color: "blue" },
        { angle: info.total_deaths, color: "red" },
        { angle: info.total_recovered, color: "green" }
    ];

    return (
        <RadialChart width={300} height={300} data={data} colorType="literal" radius={120} innerRadius={80}/>
    );
};

RadialDiagram.propTypes = {
    info: PropTypes.object
};


export default RadialDiagram;