import React from 'react';
import PropTypes from 'prop-types';
import { RadialChart } from 'react-vis';

const RadialDiagram = (props) => {
  const { info } = props;

  const data = [
    { angle: info.total_cases, color: 'blue' },
    { angle: info.total_deaths, color: 'red' },
    { angle: info.total_recovered, color: 'green' },
  ];

  return (
    <RadialChart width={300} height={300} data={data} colorType="literal" radius={120} innerRadius={80} />
  );
};

RadialDiagram.propTypes = {
  info: {
    total_cases: PropTypes.number,
    total_deaths: PropTypes.number,
    total_recovered: PropTypes.number,
    total_new_cases_today: PropTypes.number,
    total_new_deaths_today: PropTypes.number,
    total_serious_cases: PropTypes.number,
  },
};

RadialDiagram.defaultProps = {
  info: {},
};

export default RadialDiagram;
