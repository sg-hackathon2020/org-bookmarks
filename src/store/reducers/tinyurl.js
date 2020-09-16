import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    url: null,
    loading: false,
    tinyUrl: null,
    error: null
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
}

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
        default:
            return state;
    }
}

export default reducer;