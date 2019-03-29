import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import SignUpContainer from '../containers/SignupContainer';

const Routes = () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={SignUpContainer} />
                <Route path="/register" component={SignUpContainer} />
            </Switch>
        </BrowserRouter>
    </div>

);

export default Routes;
