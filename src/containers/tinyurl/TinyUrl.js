import React, {Component} from "react";
import {Alert, Button, Card, Form, Modal, Spinner} from 'react-bootstrap';
import * as actions from "../../store/actions";
import {connect} from "react-redux";

class TinyUrl extends Component {
    state = {
        url: null,
        tiny: null,
        show: false
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state.url);
        this.props.onTinyfy(this.state.url);
    };

    onModalClose = () => {
        this.props.hideTinyUrlModalByClick();
    };


    render() {

        let errorMessage = null;
        let spinner = null;

        if (this.props.loading) {
            spinner = <Spinner animation="grow" variant="success"/>
        }

        if (this.props.error) {
            errorMessage = (
                <>
                    <Alert variant="danger">
                        <p className="text-blue">this.props.error</p>
                    </Alert>
                </>
            );
        }

        let modal = null;

        /*on clicking close button set tiny to null*/
        if (this.props.tiny !== null) {
            /*
                        this.setState({show: true});
            */
            console.log(`i am inside modal:${this.props.tiny}`);
            modal = <><Modal show={true}>
                <Modal.Header closeButton onClick={this.onModalClose}>
                    <Modal.Title>New Tiny Url Created</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>><a href={this.props.tiny}>{this.props.tiny}</a></p>
                </Modal.Body>
            </Modal></>
        }

        return (
            <div className="container-fluid d-flex justify-content-center">
                <Card style={{width: '25rem'}} className="bg-dark">
                    <div className="container pt-5 pb-5">
                        <div className="container pt-5 pb-5">
                            <Form>
                                <Form.Group controlId="Url">
                                    <Form.Label className="text-white">Url</Form.Label>
                                    <Form.Control type="url" placeholder="Enter Url"
                                                  onChange={this.onInputChange} disabled={this.props.loading}/>
                                </Form.Group>
                                <Button className="container-fluid d-flex justify-content-center m-1"
                                        variant="outline-info" onClick={this.submitHandler}>
                                    Submit
                                </Button>
                                {spinner}
                                {errorMessage}
                                {modal}
                            </Form>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }

    onInputChange = e => {
        switch (e.target.id) {
            case 'Url':
                this.setState({url: e.target.value});
                break;
            default:
                break;
        }
    };
}

const mapStateToPros = state => {
    return {
        loading: state.tiny.loading,
        error: state.tiny.error,
        tiny: state.tiny.tinyUrl
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTinyfy: (url) => dispatch(actions.createTinyUrls(url)),
        hideTinyUrlModalByClick: () => dispatch(actions.htm())
    };
};


export default connect(mapStateToPros, mapDispatchToProps)(TinyUrl);