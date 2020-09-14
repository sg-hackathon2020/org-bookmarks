import React from 'react';

const button = (props) => (
    <button
        disabled={props.disabled}
        className= "btn-danger p-2 m-2"
        onClick={props.clicked}>{props.children}</button>
);
export default button;