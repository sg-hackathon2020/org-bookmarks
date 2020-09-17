import axios from 'axios';
import * as actionTypes from './actionTypes'


export const createTinyUrl = () => {
    return {
        type: actionTypes.CREATE_TINY_URL_START
    };
};

export const createTinyUrlSuccess = (tinyUrl) => {
    return {
        type: actionTypes.CREATE_TINY_URL_SUCCESS,
        tiny: tinyUrl
    };
};

export const createTinyUrlFailure = (error) => {
    return {
        type: actionTypes.CREATE_TINY_URL_FAILURE,
        error: error
    };
};

export const hideTinyUrlModal = () => {
    return {
        type: actionTypes.HIDE_TINY_URL_MODAL
    };
};

export const htm = () => {
    return dispatch => {
        dispatch(hideTinyUrlModal());
    };
};


export const createTinyUrls = (url) => {
    return dispatch => {
        dispatch(createTinyUrl());
        let resourceUrl = `http://localhost:8080/api/v1/tinyUrl`;
        axios.post(resourceUrl, {url: url}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(response => {
            console.log(response);
            dispatch(createTinyUrlSuccess(response.data));
        }).catch(err => {
            dispatch(createTinyUrlFailure(err));
        });
    };
};

