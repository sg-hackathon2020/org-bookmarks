import React, {Component} from 'react';
import {connect} from 'react-redux';
/*
import Button from '../../components/UI/Button/Button';
*/

import * as actions from '../../store/actions/index';
import {Button, Card, Form, Spinner} from "react-bootstrap";

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

        /* if (this.props.loading) {
             form = <Spinner animation="grow" variant="success"/>
         }*/

        let errorMessage = null;
        let spinner = null;

        if (this.props.loading) {
            spinner = <Spinner animation="grow" variant="success"/>
        }

        if (this.props.error) {
            errorMessage = (
                <p className="text-white">{this.props.error.message}</p>
            );
        }

        return (
            <Card style={{width: '50rem'}} className="bg-dark">
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
                            <Button className="p-1 m-1 col-4 d-flex justify-content-center" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <Button className="p-1 m-1 col-4 d-flex justify-content-center"
                            onClick={this.switchAuthModeHandler}
                            btnType="Danger">SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>
                        {spinner}
                        {errorMessage}
                    </div>
                </div>
            </Card>
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
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
    };
};

export default connect(mapStateToPros, mapDispatchToProps)(Auth);