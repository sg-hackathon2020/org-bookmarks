import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import * as actions from '../../store/actions/index';
import {Alert, Button, Card, Form, Spinner} from "react-bootstrap";

class Auth extends Component {
    state = {
        email: null,
        password: null,
        isSignup: true
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.email, this.state.password, this.state.isSignup);
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup};
        });
    }

    spinner = () => {

    }

    render() {

        let errorMessage = null;
        let spinner = null;

        if (this.props.loading) {
            spinner = <Spinner animation="grow" variant="success"/>
        }

        if (this.props.error) {
            let err;
            switch (this.props.error.message) {
                case 'ADMIN_ONLY_OPERATION':
                    err = 'Please Enter Something!';
                    break;
                case 'MISSING_EMAIL':
                    err = 'Enter Email Id!';
                    break;
                case 'MISSING_PASSWORD':
                    err = 'Enter Password!';
                    break;
                case 'EMAIL_EXISTS':
                    err = 'Email Already Exists! Switch To Sign-In!'
                    break;
                default:
                    err = this.props.error.message;
                    break;
            }
            errorMessage = (
                <>
                    <Alert variant="danger">
                        <p className="text-blue">{err}</p>
                    </Alert>
                </>
            );
        }
        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to="/"/>
        }
        return (<>
                {authRedirect}
                <div className="container-fluid d-flex justify-content-center">
                    <Card style={{width: '25rem'}} className="bg-dark">
                        <div className="container pt-5 pb-5">
                            <div className="container pt-5 pb-5">
                                <Form onSubmit={this.submitHandler} className="bg-dark">
                                    <Form.Group controlId="email">
                                        <Form.Label className="text-white">Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email"
                                                      onChange={this.onInputChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="password">
                                        <Form.Label className="text-white">Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter Password"
                                                      onChange={this.onInputChange}/>
                                    </Form.Group>
                                    <Button className="container-fluid d-flex justify-content-center m-1"
                                            variant="outline-primary"
                                            type="submit">
                                        Submit
                                    </Button>
                                </Form>
                                <Button className="container-fluid d-flex justify-content-center m-1"
                                        variant="outline-info"
                                        onClick={this.switchAuthModeHandler}
                                        btnType="Danger">SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>
                                {spinner}
                                {errorMessage}
                            </div>
                        </div>
                    </Card>
                </div>
            </>
        );
    }

    onInputChange = e => {
        switch (e.target.id) {
            case 'email':
                this.setState({email: e.target.value});
                break;
            case 'password':
                this.setState({password: e.target.value});
                break;
            default:
                break;
        }
    };
}

const mapStateToPros = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
    };
};

export default connect(mapStateToPros, mapDispatchToProps)(Auth);