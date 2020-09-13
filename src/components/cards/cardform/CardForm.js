import React, {Component} from "react";
import {Button, Card, Form, Spinner} from "react-bootstrap";

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
            urlFormControl = <Form.Control type="url" placeholder="Enter Url" value={this.props.data.url}
                                           disabled={this.props.isUpdating}
                                           onChange={this.handleInputChange}/>
        } else {
            urlFormControl = <Form.Control type="url" placeholder="Enter Url"
                                           onChange={this.handleInputChange} disabled={this.props.loading}/>
        }


        return (
            <Card style={{width: '50rem'}} className="bg-dark">
                <div className="container pt-5 pb-5">
                    <div className="container pt-5 pb-5">
                        <Form onSubmit={this.handleFormSubmit} className="bg-dark" >
                            <Form.Group controlId="title">
                                <Form.Label
                                    className="text-white">title
                                </Form.Label>
                                {titleFormControl}
                            </Form.Group>


                            <Form.Group controlId="description">
                                <Form.Label className="text-white">
                                    Description</Form.Label>
                                {descriptionFormControl}
                            </Form.Group>

                            <Form.Group controlId="url">
                                <Form.Label className="text-white">Enter Url</Form.Label>
                                {urlFormControl}
                            </Form.Group>

                            <Button className="p-1 m-1 col-4 d-flex justify-content-center" variant="primary"
                                    type="submit" onClick={this.handleFormSubmit}>
                                Submit
                            </Button>
                            {spinner}
                            {errorMessage}
                        </Form>
                    </div>
                </div>
            </Card>
        );
    }
}

CardForm.propTypes = {};

export default CardForm;