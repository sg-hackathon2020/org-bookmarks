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
export const userAllTinyUrlStart = () => {
    return {
        type: actionTypes.SHOW_MY_TINY_URLS_START
    };
};

export const htm = () => {
    return dispatch => {
        dispatch(hideTinyUrlModal());
    };
};


export const userAllTinyUrlSuccess = (urls) => {
    return {
        type: actionTypes.SHOW_MY_TINY_URLS_SUCCESS,
        urls: urls
    };
};

export const userAllTinyUrlFailure = (error) => {
    return {
        type: actionTypes.SHOW_MY_TINY_URLS_FAILURE,
        error: error
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
            dispatch(createTinyUrlSuccess(response.data));
        }).catch(err => {
            dispatch(createTinyUrlFailure(err));
        });
    };
};

export const fetchAllMyTinyUrls = () => {
    return dispatch => {
        dispatch(userAllTinyUrlStart());
        let resourceUrl = `http://localhost:8080/api/v1/tinyUrls`;
        axios.get(resourceUrl, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(response => {
            console.log(JSON.stringify(response.data));
            dispatch(userAllTinyUrlSuccess(response.data));
        }).catch(err => {
            dispatch(userAllTinyUrlFailure(err));
        });
    };
};

