import React from 'react';
import { routesMap } from '../../../routes';
import { Link } from 'react-router-dom';
import { Alert } from 'antd';

const E404 = () => {
    return (
        <>
            <Alert
                message="Ошибка 404, страницы не существует"
                description={<Link to={routesMap.home}>Вернуться домой</Link>}
                type="error"
            />
        </>
    );
};

export default E404;