import React, {Component} from "react";
import {Button, Form} from "react-bootstrap";

class TestComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null
        };

    }

    goHere(event) {
        console.log(event);
    } ;

    render() {
        console.log(this.state.email);
        return (
            <div>
                <Form onSubmit={this.goHere}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.onEmailChange}/>
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
        );
    }

    onEmailChange = e => {
        this.setState({email: e.target.value});
    };
}

TestComponent.propTypes = {};

export default TestComponent;