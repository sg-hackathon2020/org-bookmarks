import React, {Component} from "react";
import {Button, Card, Modal} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

class BookMarkCard extends Component {
    state = {
        show: false
    }
    setShow = (event) => {
        this.setState({show: true});
    }

    onModalClose = () => {
        this.setState({show: false});
    }

    render() {
        return (<><><Modal show={this.state.show}>
                <Modal.Header closeButton onClick={this.onModalClose}>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="h4">{this.props.description}</div>
                    <p>><a href={this.props.tinyUrl}>{this.props.tinyUrl}</a></p>
                </Modal.Body>
            </Modal></>
                <div className="col-md-3 m-1 p-1 d-flex align-items-stretch" onClick={this.props.clicked}>
                    <Card style={{width: '18rem'}} className="bg-dark text-white">
                        <FontAwesomeIcon icon="coffee"/>
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Button variant="outline-primary m-1" onClick={() => this.setShow()}>View</Button>
                            <Button variant="outline-warning m-1" onClick={this.props.whenEdit}>Edit</Button>
                        </Card.Body>
                    </Card>
                </div>
            </>
        );
    }
}

BookMarkCard.propTypes = {};

export default BookMarkCard;

