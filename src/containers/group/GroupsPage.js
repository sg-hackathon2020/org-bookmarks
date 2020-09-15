import React, {Component} from "react";
import NewGroupButton from "../../components/group/newgroupbutton/NewGroupButton";
import {connect} from "react-redux";
import * as actions from "../../store/actions";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import Table from "react-bootstrap/Table";
import {Spinner} from "react-bootstrap";


class GroupsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    componentDidMount() {
        const {fetchGroups} = this.props;
        fetchGroups();
    }

    render() {
        const {groups, loading} = this.props;

        let spinner = null;

        if (loading) {
            spinner = <Spinner animation="grow" variant="success"/>
        }
        let table = null;
        if (groups) {
            table = groups.map(group => {
                return <tr>
                    <td>{group.id}</td>
                    <td>{group.groupName}</td>
                    <td>{group.clusterName}{group.tribeName}{group.ftName}</td>
                    <td><Button variant="danger" as={Link} size="sm" to="/newGroup" type="submit">X</Button>{' '}</td>
                </tr>
            });
        } else {
            table = null
        }
        return (
            <div className="container">
                <div className="row p-1"><NewGroupButton/></div>
                <div className="row p-1">
                    {spinner}
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Group Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                        </thead>
                        <tbody>
                        {table}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    groups: state.group.groups,
    error: state.group.error,
    loading: state.group.loading
})

const mapDispatchToProps = dispatch => {
    return {
        fetchGroups: () => dispatch(actions.groupsGetAll())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupsPage);