import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table'
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const GroupTable = props => {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td><Button variant="danger" as={Link} size="sm" to="/newGroup" type="submit">X</Button>{' '}</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td><Button variant="danger" as={Link} size="sm" to="/newGroup" type="submit">X</Button>{' '}</td>
            </tr>
            <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td><Button variant="danger" as={Link} size="sm" to="/newGroup" type="submit">X</Button>{' '}</td>
            </tr>
            </tbody>
        </Table>
    );
};

GroupTable.propTypes = {};

export default GroupTable;