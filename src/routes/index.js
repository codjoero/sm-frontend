import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import SignUpContainer from '../containers/SignupContainer';
import LoginContainer from '../containers/LoginContainer';

const Routes = () => (
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={LoginContainer} />
                <Route path="/register" component={SignUpContainer} />
            </Switch>
        </div>
    </Router>
);

export default Routes;
