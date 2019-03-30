import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from '../components/Login/LoginForm';
import * as actions from '../redux/actions';

export class LoginContainer extends Component {
    state = {
        disabled: false,
        loginInfo: {
            username: '',
            password: '',
        },
    }

    loginHandler = (e) => {
        const { loginInfo } = this.state;
        const updateloginInfo = { ...loginInfo };
        let disableBtn = true;

        if (e.target.name === 'username') {
            updateloginInfo.username = e.target.value;
        } else if (e.target.name === 'password') {
            updateloginInfo.password = e.target.value;
        }

        if (updateloginInfo.username !== '') {
            disableBtn = updateloginInfo.username.length > 2 && disableBtn;
        }
        if (updateloginInfo.password !== '') {
            disableBtn = updateloginInfo.password.length > 2 && disableBtn;
        }
        if (updateloginInfo.username === '' || updateloginInfo.password === '') {
            disableBtn = false;
        }

        this.setState({
            disabled: disableBtn,
            loginInfo: updateloginInfo,
        });
        e.preventDefault();
    }

    submitHandler = () => {
        const { loginInfo } = this.state;
        this.props.userLoginDispatch(loginInfo);
    }

    render() {
        let redirectHome = null;
        let errorMsg = null;
        let errorInfo = false;

        if (this.props.isAuthenticated) {
            redirectHome = (<Redirect to="/home" />);
        } else if (this.props.error !== null) {
            errorMsg = this.props.error.message;
            errorInfo = true;
        }

        return (
            <>
                {redirectHome}
                <LoginForm
                    disabled={!this.state.disabled}
                    inputChanged={e => this.loginHandler(e, this.state.loginInfo)}
                    onSubmit={this.submitHandler}
                    loading={this.props.loading}
                    errorMsg={errorMsg}
                    invalidForm={errorInfo}
                />
            </>
        );
    }
}

export const mapStateToProps = state => ({
    loading: state.login.loading,
    isAuthenticated: state.login.isAuthenticated,
    error: state.login.error,
});

export const mapDispatchToProps = dispatch => ({
    userLoginDispatch: loginInfo => dispatch(actions.loginUserAction(loginInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
