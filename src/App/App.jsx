/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from 'components/Navbar';
import routes from 'routes';
import './App.scss';

const App = () => {
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

export default App;
