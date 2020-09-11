import React from 'react';

import CountryPage from 'pages/CountryPage';
import Information from 'pages/Information';
import Statistic from 'pages/Statistic';
import Main from 'pages/Main';
import Page404 from 'pages/Error404';

interface Route {
    name?: string,
    url: string,
    component: React.FC<any>,
    exact?: boolean
}

const routes: Route[] = [
    {
        name: 'home',
        url: '/',
        component: Main,
        exact: true,
    },
    {
        name: 'statistic',
        url: '/stat',
        component: Statistic,
        exact: true,
    },
    {
        name: 'information',
        url: '/info',
        component: Information,
        exact: true,
    },
    {
        name: 'countryPage',
        url: '/country/:id',
        component: CountryPage,
    },
    {
        name: 'page404',
        url: '**',
        component: Page404,
    },
];

const routesMap: { [name: string]: string } = routes.reduce((prevRoutes, currentRoute) => ({
    ...prevRoutes,
    [`${currentRoute.name}`]: currentRoute.url,
}), {});

export default routes;
export {
    routesMap
};