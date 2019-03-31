import React, { Component } from 'react';
import {
    Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';
import { connect } from 'react-redux';

import SignUpContainer from '../containers/SignupContainer';
import LoginContainer from '../containers/LoginContainer';
import ProductsContainer from '../containers/ProductsContainer';
import Layout from '../containers/Layout';
import * as actions from '../redux/actions/index';

export class App extends Component {
    componentDidMount() {
        if (!this.props.isAuthenticated) {
            this.props.autoLogin();
        }
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={LoginContainer} />
                    <Route path="/register" component={SignUpContainer} />
                    <Layout>
                        <Route path="/products" exact component={ProductsContainer} />
                    </Layout>
                </Switch>
            </Router>
        );
    }
}

export const mapStateToProps = state => ({
    isAuthenticated: state.login.isAuthenticated,
});

export const mapDispatchToProps = dispatch => ({
    autoLogin: () => dispatch(actions.autoLoginAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
