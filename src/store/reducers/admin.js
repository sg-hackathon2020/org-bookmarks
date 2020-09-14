import * as actionTypes from '../actions/actionTypes';
import {GROUP_ADMIN_TOGGLE_FAILURE, GROUP_ADMIN_TOGGLE_START, GROUP_ADMIN_TOGGLE_SUCCESS} from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    error: null,
    loading: false,
    admin_view: null,
    groupId: null
}

const getAdminViewStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
}

const getAdminViewSuccess = (state, action) => {
    return updateObject(state,
        {
            loading: false,
            admin_view: action.admin_view,
            groupId: action.groupId
        });
};

const getAdminViewFailure = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const toggleGroupAdminStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
}

const toggleGroupAdminSuccess = (state, action) => {
    return updateObject(state,
        {
            loading: false,
            admin_view: action.admin_view,
            groupId: action.groupId
        });
};

const toggleGroupAdminFailure = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GROUP_ADMIN_VIEW_READ_START:
            return getAdminViewStart(state, action);
        case actionTypes.GROUP_ADMIN_VIEW_READ_SUCCESS:
            return getAdminViewSuccess(state, action);
        case actionTypes.GROUP_ADMIN_VIEW_READ_FAILURE:
            return getAdminViewFailure(state, action);
        case GROUP_ADMIN_TOGGLE_START:
            return toggleGroupAdminStart(state, action);
        case GROUP_ADMIN_TOGGLE_SUCCESS:
            return toggleGroupAdminSuccess(state, action);
        case GROUP_ADMIN_TOGGLE_FAILURE:
            return toggleGroupAdminFailure(state, action);
        default:
            return state;

    }
}

export default reducer;