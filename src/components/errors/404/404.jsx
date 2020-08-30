import React from 'react';
import { routesMap } from '../../../routes';
import { Link } from 'react-router-dom';

export default function(){
    return (
        <>
            <h1>Ошибка 404, страницы не существует</h1>
            <hr/>
            <div>
                <p>
                    <Link to={routesMap.home}>Вернуться домой</Link>
                </p>
            </div>
        </>
    );
}