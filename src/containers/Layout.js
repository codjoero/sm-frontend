import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import * as actions from '../redux/actions';
import '../assets/Layout.css';

export class Layout extends Component {
    state = { activeItem: 'home' }

    handleClick = (e, { name }) => {
        this.setState({ activeItem: name });
        this.props.userLogoutDispatch();
    }

    render() {
        const { activeItem } = this.state;

        return (
            <div className="Layout">
                <Menu pointing secondary color="blue">
                    <NavLink to="/products">
                        <Header as="h2" color="green" textAlign="center">
                            Store Manager
                        </Header>
                    </NavLink>
                    <Menu.Item
                        name="home"
                        active={activeItem === 'home'}
                        onClick={this.handleClick}
                        position="right"
                    >
                    Products
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <NavLink to="/">
                            <Menu.Item
                                name="logout"
                                active={activeItem === 'logout'}
                                onClick={this.handleClick}
                            />
                        </NavLink>
                    </Menu.Menu>
                </Menu>
                {this.props.children}
            </div>
        );
    }
}

export const mapStateToProps = state => ({
    isAuthenticated: state.login.isAuthenticated,
});

export const mapDispatchToProps = dispatch => ({
    userLogoutDispatch: () => dispatch(actions.logoutUserAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
