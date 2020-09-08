import React, {Component} from "react";
import {Badge, Button, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <>
                <div className="container bg-dark w-25">
                    <FontAwesomeIcon icon="coffee"/>
                    <Form>
                        <Badge variant="primary">Primary</Badge>{' '}
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label><FontAwesomeIcon icon="coffee"/>Emaila address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </>
        );
    }
}

LoginForm.propTypes = {};

export default LoginForm;