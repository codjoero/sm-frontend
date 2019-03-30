import React from 'react';
import {
    Form, Grid, Segment, Button, Header, Message, Divider,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../../assets/startForms.css';


const LoginForm = props => (
    <div className="signForm">
        <Grid relaxed="very" stackable>
            <Segment color="green" className="regSegment">
                <Header as="h2" color="green" textAlign="center">
                    Login
                </Header>
                <Form error={props.invalidForm}>
                    <div className="spaceComponents">
                        {props.invalidForm
                            ? <Message error content={props.errorMsg} /> : null
                        }
                        <Form.Input
                            icon="user"
                            name="username"
                            iconPosition="left"
                            placeholder="Username"
                            onChange={props.inputChanged}
                            color="red"
                            required
                        />
                        <Form.Input
                            icon="lock"
                            name="password"
                            iconPosition="left"
                            type="password"
                            placeholder="Password"
                            onChange={props.inputChanged}
                            required
                        />
                        <Button
                            fluid
                            basic
                            disabled={props.disabled}
                            onClick={props.onSubmit}
                            loading={props.loading}
                            color="green"
                        >
                            Login
                        </Button>
                        <Divider horizontal>or</Divider>
                        <Link to="/register">
                            <Header as="h5" color="blue" textAlign="center">
                                Signup
                            </Header>
                        </Link>
                    </div>
                </Form>
            </Segment>
        </Grid>
    </div>
);

export default LoginForm;
