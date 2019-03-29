import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import SignupForm from '../components/Signup/SignupForm';

export class Register extends Component {
    state = {
        disabled: false,
        userInfo: {
            name: '',
            username: '',
            password: '',
            role: '',
        },
        error: false,
        nameTouched: false,
        usernameTouched: false,
        passwordTouched: false,
        roleTouched: false,
        confirmPassword: '',
        passwordsDontMatch: false,
    }

    inputHandler = (e, { value, options }) => {
        const { userInfo, confirmPassword } = this.state;
        const updatedUserInfo = { ...userInfo };
        let nameTouched = false;
        let usernameTouched = false;
        let passwordTouched = false;
        let roleTouched = false;
        let disableBtn = true;
        let updatedConfPassword = confirmPassword;

        if (e.target.name === 'name') {
            updatedUserInfo.name = value;
            nameTouched = false;
        } else if (e.target.name === 'username') {
            updatedUserInfo.username = value;
            usernameTouched = false;
            nameTouched = this.state.userInfo.name.length <= 4;
        } else if (options) {
            updatedUserInfo.role = value;
            roleTouched = false;
            nameTouched = this.state.userInfo.name.length <= 4;
            usernameTouched = this.state.userInfo.username.length <= 4;
        } else if (e.target.name === 'password') {
            updatedUserInfo.password = value;
            passwordTouched = false;
            nameTouched = this.state.userInfo.name.length <= 4;
            usernameTouched = this.state.userInfo.username.length <= 4;
        } else if (e.target.name === 'cPassword') {
            nameTouched = this.state.userInfo.name.length <= 4;
            usernameTouched = this.state.userInfo.username.length < 4;
            passwordTouched = this.state.userInfo.password.length < 8;
            updatedConfPassword = value;
        }

        if (updatedUserInfo.name !== '') {
            disableBtn = updatedUserInfo.name.length > 4 && disableBtn;
        }
        if (updatedUserInfo.username !== '') {
            disableBtn = updatedUserInfo.username.length > 4 && disableBtn;
        }
        if (updatedUserInfo.role !== '') {
            disableBtn = updatedUserInfo.role.length > 2 && disableBtn;
        }
        if (updatedUserInfo.password !== '') {
            disableBtn = updatedUserInfo.password.length > 8 && disableBtn;
        }
        if (updatedUserInfo.username === '' || updatedUserInfo.password === '' || updatedUserInfo.role === '') {
            disableBtn = false;
        }

        this.setState({
            disabled: disableBtn,
            userInfo: updatedUserInfo,
            nameTouched,
            usernameTouched,
            roleTouched,
            passwordTouched,
            confirmPassword: updatedConfPassword,
        });
        e.preventDefault();
    }

    registerUserHandler = () => {
        const { confirmPassword, userInfo } = this.state;
        const passwordsDontMatch = confirmPassword !== userInfo.password;
        this.setState({ passwordsDontMatch });

        if (!this.state.passwordsDontMatch) {
            this.props.registerUser(userInfo);
        }
    }

    render() {
        this.failedError = null;
        this.formError = false;
        this.successColor = null;

        if (this.state.passwordsDontMatch) {
            this.failedError = "Sorry passwords don't match";
            this.formError = true;
        } else if (this.props.error !== null && this.props.error.message) {
            this.failedError = this.props.error.message;
            this.formError = true;
        } else if (this.props.registered !== null) {
            this.formError = true;
            this.successColor = 'green';
            this.failedError = this.props.registered.message;
        }

        return (
            <>
                <SignupForm
                    submitData={this.registerUserHandler}
                    inputChanged={this.inputHandler}
                    disabled={!this.state.disabled}
                    setError={this.formError}
                    registrationError={this.failedError}
                    usernameError={this.state.usernameTouched}
                    passwordError={this.state.passwordTouched}
                    phoneError={this.state.phoneTouched}
                    loading={this.props.loading}
                    msgColor={this.successColor}
                />
            </>
        );
    }
}

export const mapStateToProps = state => ({
    loading: state.signup.loading,
    error: state.signup.error,
    registered: state.signup.registered,
});

export const mapDispatchToProps = dispatch => ({
    registerUser: userData => dispatch(actions.registerUserAction(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
