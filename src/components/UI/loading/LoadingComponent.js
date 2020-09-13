import React from 'react';
import {Alert, Spinner} from "react-bootstrap";

/*pass loading props to this item before using*/
const LoadingComponent = (props) => {
    return (
        <div>
            <Spinner animation="grow" variant="secondary"/>
            <Alert show={props.loading} variant="dark">
                <Alert.Heading>How's it going?!</Alert.Heading>
                <p>
                    we are still loading this page for you.......
                </p>
                <hr/>
                <div className="d-flex justify-content-end">
                </div>
            </Alert>
        </div>
    );
};

export default LoadingComponent;