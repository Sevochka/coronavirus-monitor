import React from 'react';

import Main from 'pages/Main';
import Page404 from 'pages/Error404';
import Statistic from 'pages/Statistic';
import CountryPage from 'pages/CountryPage';
import Information from 'pages/Information';

interface Route {
  name: string;
  path: string;
  component: React.FC<any>;
  exact?: boolean;
}

const routes: Route[] = [
  {
    name: 'home',
    path: '/',
    component: Main,
    exact: true,
  },
  {
    name: 'statistic',
    path: '/stat',
    component: Statistic,
    exact: true,
  },
  {
    name: 'information',
    path: '/info',
    component: Information,
    exact: true,
  },
  {
    name: 'countryPage',
    path: '/country/:id',
    component: CountryPage,
  },
  {
    name: 'page404',
    path: '**',
    component: Page404,
  },
];

const routesMap: { [name: string]: string } = routes.reduce(
  (prevRoutes, currentRoute) => ({
    ...prevRoutes,
    [`${currentRoute.name}`]: currentRoute.path,
  }),
  {},
);

export default routes;
export { routesMap };
