import React from 'react';
import {Card} from "react-bootstrap";

const InfoCards = (props) => {
    return (
        <Card
            bg="danger"
            key="myKey"
            text="white"
            style={{width: '12rem', height: '10rem'}}
            className="mb-2 mt-2"
        >
            <Card.Header>{props.cardTitle}</Card.Header>
            <Card.Body>
                <Card.Title className="text-center">
                    {props.vals}
                </Card.Title>
                <Card.Text>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default InfoCards;