import React, {Component} from 'react';
import {Form} from "react-bootstrap";
import {connect} from "react-redux";
import Button from "../../../components/UI/Button/Button";
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
        console.log(this.state);
        this.props.onGroupSave(this.state.groupName, this.state.clusterName, this.state.tribeName, this.state.ftName);
    }

    render() {

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }
        return (
            <div>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="groupName">
                        <Form.Label>Group Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Group Name" onChange={this.onInputChange}/>
                    </Form.Group>

                    <Form.Group controlId="clusterName">
                        <Form.Label>Cluster Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Group Name" onChange={this.onInputChange}/>
                    </Form.Group>

                    <Form.Group controlId="tribeName">
                        <Form.Label>Tribe Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Group Name" onChange={this.onInputChange}/>
                    </Form.Group>

                    <Form.Group controlId="ftName">
                        <Form.Label>Group Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Group Name" onChange={this.onInputChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
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
        loading: state.auth.loading,
        error: state.auth.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGroupSave: (groupName, clusterName, tribeName, ftName) => dispatch(actions.groupSave(groupName, clusterName, tribeName, ftName))
    };
};

export default connect(mapStateToPros, mapDispatchToProps)(CreateGroup);