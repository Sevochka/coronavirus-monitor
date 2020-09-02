import CountryPage from 'pages/CountryPage';
import Information from 'pages/Information';
import Statistic from 'pages/Statistic';
import Main from 'pages/Main';
import Page404 from 'pages/Error404';

const routes = [{
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
  name: 'country statistic',
  url: '/country/:id',
  component: CountryPage,
},
{
  url: '**',
  component: Page404,
},
];

const routesMap = {};

routes.forEach((route) => {
  if (Object.prototype.hasOwnProperty.call(route, 'name')) {
    routesMap[route.name] = route.url;
  }
});

export default routes;
export {
  routesMap,
};
