import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';

function App() {
    const routesComponents = routes.map(route => (
        <Route
            path={route.url}
            component={route.component}
            exact={route.exact}
            key={route.url}
        />
    ));

    
    return (
        <Router>
            <Navbar />
            <div className="app-container">
                <Switch>{routesComponents}</Switch>
            </div>
        </Router>
    );
}

export default App;
