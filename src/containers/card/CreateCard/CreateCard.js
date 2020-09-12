import React, {Component} from "react";
import {Button, Card, Form, Spinner} from "react-bootstrap";
import * as actions from "../../../store/actions";
import {connect} from "react-redux";

class CreateCard extends Component {
    state = {
        //title, description, url, groupId
        title: null,
        description: null,
        url: null,
        groupId: this.props.match.params.groupId
    }

    cardSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onCardSave(this.state.title, this.state.description, this.state.url, this.state.groupId);
    }

    //consume groupId from route param
    componentDidMount() {
        this.setState({id: this.props.match.params.groupId});
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
        return (
            <Card style={{width: '50rem'}} className="bg-dark">
                <div className="container pt-5 pb-5">
                    <div className="container pt-5 pb-5">
                        <Form onSubmit={this.cardSubmitHandler} className="bg-dark">
                            <Form.Group controlId="title">
                                <Form.Label className="text-white">Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter Title" onChange={this.onInputChange}/>
                            </Form.Group>

                            <Form.Group controlId="description">
                                <Form.Label className="text-white">Description</Form.Label>
                                <Form.Control type="textarea" placeholder="Enter Description"
                                              onChange={this.onInputChange}/>
                            </Form.Group>

                            <Form.Group controlId="url">
                                <Form.Label className="text-white">Enter Url</Form.Label>
                                <Form.Control type="url" placeholder="Enter Url" onChange={this.onInputChange}/>
                            </Form.Group>

                            <Button className="p-1 m-1 col-4 d-flex justify-content-center" variant="primary"
                                    type="submit" onClick={this.cardSubmitHandler}>
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

    onInputChange = e => {
        switch (e.target.id) {
            case 'title':
                this.setState({title: e.target.value});
                break;
            case 'description':
                this.setState({description: e.target.value});
                break;
            case 'url':
                this.setState({url: e.target.value});
                break;
            default:
                break;
        }
    };
}

const mapStateToPrpos = state => {
    return {
        loading: state.card.loading,
        error: state.card.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCardSave: (title, description, url, groupId) => dispatch(actions.createCard(title, description, url, groupId))
    };
};

export default connect(mapStateToPrpos, mapDispatchToProps)(CreateCard);