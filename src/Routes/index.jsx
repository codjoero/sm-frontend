import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Dashboard} />
        </Switch>
    </Router>
);

export default Routes;
