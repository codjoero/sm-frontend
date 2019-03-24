import React, { Component } from 'react';
import { connect } from 'react-redux';
import simpleAction from '../actions/simpleAction';

class Dashboard extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.simpleAction();
    }

    render() {
        return (
            <div>
                <h1>Store Manager</h1>
                <button type="button" onClick={this.handleClick}>Click Me</button>
                <p>{this.props.simpleReducer.data}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state,
});

export default connect(mapStateToProps, { simpleAction })(Dashboard);
