import {updateObject} from "../utility";
import * as actionTypes from "../actions/actionTypes";


const initialState = {
    error: null,
    loading: false,
    groups: null
};

const groupSaveStart = (state, action) => {
    return updateObject(state, {error: null, loading: true});
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

const groupsGetAllSuccess = (state, action) => {
    return updateObject(state, {groups: action.groups})
}

const groupsGetAll = (state, action) => {
    return updateObject(state, {error: null});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GROUP_SAVE:
            return groupSaveStart(state, action);
        case actionTypes.GROUP_SAVE_SUCCESS:
            return groupSaveSuccess(state, action);
        case actionTypes.GROUP_SAVE_FAIL:
            return groupSaveFail(state, action);
        case actionTypes.GROUP_GET_ALL:
            return groupsGetAll(state, action);
        case actionTypes.GROUP_GET_ALL_SUCCESS:
            return groupsGetAllSuccess(state, action);
        default:
            return state;
    }
};


export default reducer;