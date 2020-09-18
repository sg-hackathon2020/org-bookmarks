import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import * as actions from "../../store/actions";
import {connect} from "react-redux";
import {Button, Spinner} from "react-bootstrap";


class AddRemoveAdmin extends Component {
    state = {
        groupId: this.props.match.params.groupId
    }

    componentDidMount() {
        const groupId = 1;
        const {fetchAdminView} = this.props;
        fetchAdminView(groupId);
    }


    toggleAdmin = (groupId, userId) => {
        this.props.addRemoveAdmin(this.state.groupId, userId);
    }

    render() {
        const {admin_view, error, loading, groupId} = this.props;
        console.log(admin_view);

        let errorView = null;
        if (error) {
            errorView = <p>error</p>
        }

        let spinner = null;
        if (loading) {
            spinner = <Spinner animation="grow" variant="success"/>
        }


        let table = null;
        if (admin_view) {
            table = admin_view.map(admin => {
                return <tr>
                    <td>{admin.id}</td>
                    <td>{admin.email}</td>
                    <td><Button variant="outline-info"
                                onClick={() => this.toggleAdmin(admin.groupId, admin.id)}>{admin.admin ? 'remove as admin' : 'add as admin'}</Button>
                    </td>
                </tr>
            });
        }


        return (<>
                {errorView}
                {spinner}
                <div>
                    <div className="container">
                        <div className="row p-1">
                        </div>
                        <div className="row p-1">
                            <Table striped bordered hover variant="dark">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>email</th>
                                    <th>admin</th>
                                </tr>
                                </thead>
                                <tbody>
                                {table}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </>
        );
    }


}

const mapStateToProps = state => ({
    admin_view: state.admin.admin_view,
    error: state.admin.error,
    loading: state.admin.loading
})

const mapDispatchToProps = dispatch => {
    return {
        fetchAdminView: (groupId) => dispatch(actions.getAdminView(groupId)),
        addRemoveAdmin: (groupId, userId) => dispatch(actions.toggleAdmin(groupId, userId))
    };
};

AddRemoveAdmin.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddRemoveAdmin);