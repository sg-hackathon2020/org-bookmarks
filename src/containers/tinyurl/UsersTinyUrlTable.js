import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import {Spinner} from "react-bootstrap";
import * as actions from "../../store/actions";
import {connect} from "react-redux";

class UsersTinyUrlTable extends Component {


    componentDidMount() {
        //fetch the existing object
        const {fetchUserUrls} = this.props;
        fetchUserUrls();
    }

    render() {
        const {urls, error, loading, groupId} = this.props;
        console.log(urls);

        let errorView = null;
        if (error) {
            errorView = <p>error</p>
        }

        let spinner = null;
        if (loading) {
            spinner = <Spinner animation="grow" variant="success"/>
        }

        let table = null;
        if (urls) {
            table = urls.map(url => {
                console.log(`i am inide the map method: ${JSON.stringify(url)}`);
                return <tr>
                    <td>{url.id}</td>
                    <td>{url.url}</td>
                    <td><a href={url.tinyUrl}>{url.tinyUrl}</a>
                    </td>
                </tr>
            });
        }
        return (
            <>
                {errorView}
                {spinner}
                <div>
                    <div className="container">
                        <div className="row p-1">
                            <Table striped bordered hover variant="dark">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Original Url</th>
                                    <th>Tiny Url</th>
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

const mapStateToPros = state => {
    return {
        loading: state.tiny.loading,
        error: state.tiny.error,
        urls: state.tiny.urls
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserUrls: () => dispatch(actions.fetchAllMyTinyUrls())
    };
};

export default connect(mapStateToPros, mapDispatchToProps)(UsersTinyUrlTable);