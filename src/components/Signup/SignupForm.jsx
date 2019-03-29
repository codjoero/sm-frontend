import React from 'react';
import {
    Form, Grid, Segment, Button, Header, Message, Dropdown,
} from 'semantic-ui-react';
import './Signup.css';

const options = [
    { key: 'Admin', text: 'Admin', value: 'admin' },
    { key: 'Value', text: 'Attendant', value: 'attendant' },
];

const signupForm = props => (
    <div className="signForm">
        <Grid relaxed="very" stackable>
            <Segment color="green" className="regSegment">
                <Header as="h1" textAlign="center" padded="very">
                        Register
                </Header>
                <Form error={props.setError}>
                    <div className="spaceComponents">
                        {props.registrationError ? (
                            <Message
                                error
                                size="tiny"
                                content={props.registrationError}
                                color={props.msgColor}
                            />
                        ) : null
                        }
                        <Form.Input
                            icon="user"
                            iconPosition="left"
                            placeholder="Name"
                            required
                            onChange={props.inputChanged}
                            name="name"
                            error={props.nameError}
                        />
                        <Form.Input
                            icon="user"
                            iconPosition="left"
                            placeholder="Username"
                            required
                            onChange={props.inputChanged}
                            name="username"
                            error={props.usernameError}
                        />
                        <Form.Input
                            icon="lock"
                            iconPosition="left"
                            type="password"
                            placeholder="Password"
                            required
                            onChange={props.inputChanged}
                            name="password"
                            error={props.passwordError}
                        />
                        <Form.Input
                            icon="lock"
                            iconPosition="left"
                            type="password"
                            placeholder="Confirm password"
                            required
                            onChange={props.inputChanged}
                            name="cPassword"
                        />
                        <Dropdown
                            placeholder="Role"
                            fluid
                            required
                            selection
                            onChange={props.inputChanged}
                            options={options}
                            name="role"
                            error={props.roleError}
                        />
                    </div>
                    <div className="spaceComponents">
                        <Button
                            basic
                            color="green"
                            loading={props.loading}
                            fluid
                            onClick={props.submitData}
                            disabled={props.disabled}
                        >
                                Register
                        </Button>
                    </div>
                </Form>
            </Segment>
        </Grid>
    </div>
);

export default signupForm;
