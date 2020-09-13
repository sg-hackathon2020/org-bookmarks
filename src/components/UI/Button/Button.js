import React from 'react';

import classes from './Button.css';

const button = (props) => (
    <button
        disabled={props.disabled}
        className= "btn-danger p-2 m-2"
        onClick={props.clicked}>{props.children}</button>
);
 /*{[classes.Button, classes[props.btnType]].join(' ')}*/
export default button;