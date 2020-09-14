import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from 'components/Navbar';
import routes from 'routes';
import './App.scss';

const App: React.FC = () => {
  const routesComponents = routes.map((route) => (
    <Route path={route.url} component={route.component} exact={route.exact} key={route.url} />
  ));

  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Switch>{routesComponents}</Switch>
      </div>
    </Router>
  );
};

export default hot(App);
