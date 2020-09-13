import React from 'react';
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";


const NewGroupButton = () => {
    return (
        <>
            <div>
                <Button variant="dark" as={Link} size="lg" to="/newGroup" type="submit">Create New Group</Button>{' '}
            </div>
        </>
    );
};

export default NewGroupButton;