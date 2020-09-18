import React, {Component} from 'react';
import {Button, Card, Form, Spinner} from "react-bootstrap";
import {connect} from "react-redux";

import * as actions from "../../../store/actions";
import {Redirect} from "react-router-dom";

class CreateGroup extends Component {

    state = {
        groupName: null,
        clusterName: null,
        tribeName: null,
        ftName: null
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onGroupSave(this.state.groupName, this.state.clusterName, this.state.tribeName, this.state.ftName);
    }

    render() {
        const redirectLink = `/groups`;
        let errorMessage = null;
        let spinner = null;
        let redirect = null;
        if (this.props.redirectTo) {
            redirect = <Redirect to={redirectLink}/>
        }

        if (this.props.loading) {
            spinner = <Spinner animation="grow" variant="success"/>
        }

        if (this.props.error) {
            errorMessage = (
                <p className="text-white">{this.props.error.message}</p>
            );
        }
        return (
            <div className="container-fluid d-flex justify-content-center">
                <Card style={{width: '40rem'}} className="bg-dark">
                    <div className="container pt-5 pb-5">
                        <div className="container pt-5 pb-5">
                            <Form onSubmit={this.submitHandler} className="bg-dark">
                                <Form.Group controlId="groupName">
                                    <Form.Label className="text-white">Group Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Group Name"
                                                  onChange={this.onInputChange}/>
                                </Form.Group>

                                <Form.Group controlId="clusterName">
                                    <Form.Label className="text-white">Cluster Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Cluster Name"
                                                  onChange={this.onInputChange}/>
                                </Form.Group>

                                <Form.Group controlId="tribeName">
                                    <Form.Label className="text-white">Tribe Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Tribe Name"
                                                  onChange={this.onInputChange}/>
                                </Form.Group>

                                <Form.Group controlId="ftName">
                                    <Form.Label className="text-white">Feature Team Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Feature Team Name"
                                                  onChange={this.onInputChange}/>
                                </Form.Group>
                                <Button className="container-fluid d-flex justify-content-center m-1"
                                        variant="outline-info"
                                        type="submit" onClick={this.submitHandler}>
                                    Submit
                                </Button>
                                {spinner}
                                {errorMessage}
                                {redirect}
                            </Form>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }

    onInputChange = e => {
        switch (e.target.id) {
            case 'groupName':
                this.setState({groupName: e.target.value});
                break;
            case 'clusterName':
                this.setState({clusterName: e.target.value});
                break;
            case 'tribeName':
                this.setState({tribeName: e.target.value});
                break;
            case 'ftName':
                this.setState({ftName: e.target.value});
                break;
            default:
                break;
        }
    };
}


const mapStateToPros = state => {
    return {
        loading: state.group.loading,
        error: state.group.error,
        redirectTo: state.group.redirectTo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGroupSave: (groupName, clusterName, tribeName, ftName) => dispatch(actions.groupSave(groupName, clusterName, tribeName, ftName))
    };
};

export default connect(mapStateToPros, mapDispatchToProps)(CreateGroup);