import React from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'antd';
import { routesMap } from 'routes';

const E404 = () => (
  <>
    <Alert
      message="Ошибка 404, страницы не существует"
      description={<Link to={routesMap.home}>Вернуться домой</Link>}
      type="error"
    />
  </>
);

export default E404;
