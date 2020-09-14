import React from "react";
import {Button, Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const BookMarkCard = (props) => (
    <div className="col-md-3 m-1 p-1 d-flex align-items-stretch" onClick={props.clicked}>
        <Card style={{width: '18rem'}} className="bg-dark text-white">
            <FontAwesomeIcon icon="coffee"/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button variant="primary">{props.tinyUrl}</Button>
                <Button variant="warning" onClick={props.whenEdit}>Edit</Button>
            </Card.Body>
        </Card>
    </div>
);

export default BookMarkCard;