import Information from '../pages/Information';
import Statistic from '../pages/Statistic';
import Main from '../pages/Main';
import Page404 from '../pages/Error404';

let routes = [
    {
        name: 'home',
        url: '/',
        component: Main,
        exact: true
    },
    {
        name: 'statistic',
        url: '/stat',
        component: Statistic,
        exact: true
    },
    {
        name: 'information',
        url: '/info',
        component: Information,
        exact: true
    },
    {
        url: '**',
        component: Page404
    }
];

let routesMap = {};

routes.forEach((route) => {
    if(route.hasOwnProperty('name')){
        routesMap[route.name] = route.url;
    }
});

export default routes;
export {routesMap};