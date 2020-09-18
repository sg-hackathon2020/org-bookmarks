import React, {Component} from "react";
import {Button, Card, Col, Form, Row, Spinner} from "react-bootstrap";

class CardForm extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    //whenInputChanges={this.onInputChange} whenFormIsSubmitted={this.cardSubmitHandler}
    handleInputChange = (event) => {
        this.props.whenInputChanges(event.target.id, event.target.value);
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('inside child:', event);
        this.props.whenFormIsSubmitted(event);
    }

    render() {
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
        let titleFormControl = null;
        if (this.props.isUpdating) {
            titleFormControl = (<Form.Control type="text" placeholder="Enter Title"
                                              defaultValue={this.props.data.title}
                                              onChange={this.handleInputChange} disabled={this.props.loading}/>);

        } else {
            titleFormControl = (<Form.Control type="text" placeholder="Enter Title"
                                              onChange={this.handleInputChange} disabled={this.props.loading}/>);
        }

        let descriptionFormControl = null;
        if (this.props.isUpdating) {
            descriptionFormControl = <Form.Control type="textarea" placeholder="Enter Description"
                                                   defaultValue={this.props.data.description}
                                                   onChange={this.handleInputChange} disabled={this.props.loading}/>
        } else {
            descriptionFormControl = <Form.Control type="textarea" placeholder="Enter Description"
                                                   onChange={this.handleInputChange} disabled={this.props.loading}/>
        }

        let urlFormControl = null;
        if (this.props.isUpdating) {
            urlFormControl = <Form.Control type="url" placeholder="Enter Url" value={this.props.data.fullUrl}
                                           disabled={this.props.isUpdating}
                                           onChange={this.handleInputChange}/>
        } else {
            urlFormControl = <Form.Control type="url" placeholder="Enter Url"
                                           onChange={this.handleInputChange} disabled={this.props.loading}/>
        }

        let prefixFormControl = null;
        if (this.props.isUpdating) {
            prefixFormControl = <Form.Control type="text" placeholder="Enter Prefix" value={this.props.data.prefix}
                                              disabled={this.props.isUpdating}
                                              onChange={this.handleInputChange}/>
        } else {
            prefixFormControl = <Form.Control type="text" placeholder="Enter Prefix"
                                              onChange={this.handleInputChange} disabled={this.props.loading}/>
        }

        let pageTitle = null;
        if (this.props.isUpdating) {
            pageTitle = <div className="h3 text-white">Update Card</div>
        } else {
            pageTitle = <div className="h3 text-white">Create Card</div>
        }

        return (
            <div className="container-fluid d-flex justify-content-center">
                <Card style={{width: '40rem'}} className="bg-dark">
                    <div className="container pt-5 pb-5">
                        {pageTitle}
                        <Form onSubmit={this.handleFormSubmit} className="bg-dark">
                            <Form.Group controlId="title">
                                <Form.Label
                                    className="text-white">title
                                </Form.Label>
                                {titleFormControl}
                            </Form.Group>

                            <Row>
                                <Col>
                                    <Form.Group controlId="description">
                                        <Form.Label className="text-white">
                                            Description</Form.Label>
                                        {descriptionFormControl}
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="prefix">
                                        <Form.Label className="text-white">
                                            Prefix</Form.Label>
                                        {prefixFormControl}
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group controlId="url">
                                <Form.Label className="text-white">Enter Url</Form.Label>
                                {urlFormControl}
                            </Form.Group>

                            <Button className="container-fluid d-flex justify-content-center m-1" variant="outline-info"
                                    type="submit" onClick={this.handleFormSubmit}>
                                Submit
                            </Button>
                            {spinner}
                            {errorMessage}
                        </Form>
                    </div>
                </Card>
            </div>

        );
    }
}

CardForm.propTypes = {};

export default CardForm;