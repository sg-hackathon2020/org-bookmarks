import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';


const initialState = {
    error: null,
    loading: false
};

const groupSaveStart = (state, action) => {
    return updateObject(state, {error: null});
};

const groupSaveSuccess = (state, action) => {
    return updateObject(state, {loading: false});
};

const groupSaveFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GROUP_SAVE:
            return groupSaveStart(state, action);
        case actionTypes.GROUP_SAVE_SUCCESS:
            return groupSaveSuccess(state, action);
        case actionTypes.GROUP_SAVE_FAIL:
            return groupSaveFail(state, action);
        default:
            return state;
    }
};


export default reducer;