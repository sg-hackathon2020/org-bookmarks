import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    url: null,
    loading: false,
    tinyUrl: null,
    error: null,
    urls: null
}

const createTinyUrl = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
        tinyUrl: null
    });
};


const createTinyUrlSuccess = (state, action) => {
    console.log(`action is:${JSON.stringify(action)}`);
    return updateObject(state, {
        error: null,
        loading: false,
        tinyUrl: action.tiny.url,
        url: null
    });
};

const createTinyUrlFailure = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
        tinyUrl: null,
        url: null
    });
};


const fetchAllMyUrlsStart = (state, action) => {
    console.log('i am in start');
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const fetchAllMyUrlsSuccess = (state, action) => {
    console.log(`i am here: ${action}`);
    return updateObject(state, {
        error: null,
        loading: null,
        urls: action.urls
    });
};

const fetchAllMyUrlsFailure = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: null
    });
};

const hideTinyUrlModal = (state, action) => {
    return updateObject(state, {tinyUrl: null});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_TINY_URL_START:
            return createTinyUrl(state, action);
        case actionTypes.CREATE_TINY_URL_SUCCESS:
            return createTinyUrlSuccess(state, action);
        case actionTypes.CREATE_TINY_URL_FAILURE:
            return createTinyUrlFailure(state, action);
        case actionTypes.HIDE_TINY_URL_MODAL:
            return hideTinyUrlModal(state, action);
        case actionTypes.SHOW_MY_TINY_URLS_START:
            return fetchAllMyUrlsStart(state, action);
        case actionTypes.SHOW_MY_TINY_URLS_SUCCESS:
            return fetchAllMyUrlsSuccess(state, action);
        case actionTypes.SHOW_MY_TINY_URLS_FAILURE:
            return fetchAllMyUrlsFailure(state, action);
        default:
            return state;
    }
};

export default reducer;