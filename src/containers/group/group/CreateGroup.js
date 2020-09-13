import React, {Component} from 'react';
import {Button, Card, Form, Spinner} from "react-bootstrap";
import {connect} from "react-redux";

import * as actions from "../../../store/actions";

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
                            <Form.Group controlId="groupName">
                                <Form.Label className="text-white">Group Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Group Name" onChange={this.onInputChange}/>
                            </Form.Group>

                            <Form.Group controlId="clusterName">
                                <Form.Label className="text-white">Cluster Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Group Name" onChange={this.onInputChange}/>
                            </Form.Group>

                            <Form.Group controlId="tribeName">
                                <Form.Label className="text-white">Tribe Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Group Name" onChange={this.onInputChange}/>
                            </Form.Group>

                            <Form.Group controlId="ftName">
                                <Form.Label className="text-white">Group Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Group Name" onChange={this.onInputChange}/>
                            </Form.Group>
                            <Button className="p-1 m-1 col-4 d-flex justify-content-center" variant="primary"
                                    type="submit" onClick={this.submitHandler}>
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
        error: state.group.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGroupSave: (groupName, clusterName, tribeName, ftName) => dispatch(actions.groupSave(groupName, clusterName, tribeName, ftName))
    };
};

export default connect(mapStateToPros, mapDispatchToProps)(CreateGroup);