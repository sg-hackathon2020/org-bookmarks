import axios from 'axios';
import * as actionTypes from './actionTypes'

export const getAdminViewStart = (groupId) => {
    return {
        type: actionTypes.GROUP_ADMIN_VIEW_READ_START,
        groupId: groupId
    };
}

export const getAdminViewSuccess = (group_admin_view) => {
    return {
        type: actionTypes.GROUP_ADMIN_VIEW_READ_SUCCESS,
        admin_view: group_admin_view
    };
};

export const getAdminViewFailure = (error) => {
    return {
        type: actionTypes.GROUP_ADMIN_VIEW_READ_FAILURE,
        error: error
    };
};

export const toggleGroupAdminStart = (groupId, userId) => {
    return {
        type: actionTypes.GROUP_ADMIN_TOGGLE_START,
        groupId: groupId,
        userId: userId
    };
}

export const toggleGroupAdminSuccess = (group_admin_view) => {
    return {
        type: actionTypes.GROUP_ADMIN_TOGGLE_SUCCESS,
        admin_view: group_admin_view
    };
};

export const toggleGroupAdminFailure = (error) => {
    return {
        type: actionTypes.GROUP_ADMIN_TOGGLE_FAILURE,
        error: error
    };
};


export const getAdminView = (groupId) => {
    return dispatch => {
        dispatch(getAdminViewStart(groupId));
        let resourceUrl = `https://beyond-bookmarks-api.herokuapp.com/api/v1/groups/${groupId}/admins`;
        axios.get(resourceUrl, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(response => {
            dispatch(getAdminViewSuccess(response.data));

        }).catch(err => {
            dispatch(getAdminViewFailure(err));
        });
    };
};

export const toggleAdmin = (groupId, userId) => {
    return dispatch => {
        dispatch(toggleGroupAdminStart(groupId, userId));
        let resourceUrl = `https://beyond-bookmarks-api.herokuapp.com/api/v1/groups/${groupId}/admins`;
        axios.post(resourceUrl, {
            groupId: groupId,
            userId: userId
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(response => {
            dispatch(toggleGroupAdminSuccess(response.data));
        }).catch(err => {
            dispatch(toggleGroupAdminFailure(err));
        });
    };
};
