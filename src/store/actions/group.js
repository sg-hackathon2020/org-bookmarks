import axios from 'axios';
import * as actionTypes from './actionTypes'

export const saveGroup = () => {
    return {
        type: actionTypes.GROUP_SAVE
    };
};

//when getting groups for current user, just pass userid
export const getAllGroups = () => {
    return {
        type: actionTypes.GROUP_GET_ALL
    };
};

export const getAllGroupsSuccess = (groups) => {
    return {
        type: actionTypes.GROUP_GET_ALL_SUCCESS,
        groups: groups
    };
};

export const getAllGroupsFailure = (error) => {
    return {
        type: actionTypes.GROUP_GET_ALL_FAILURE,
        error: error
    }
}

export const groupSaveSuccess = () => {
    return {
        type: actionTypes.GROUP_SAVE_SUCCESS
    };
};

export const groupSaveFail = (error) => {
    return {
        type: actionTypes.GROUP_SAVE_FAIL,
        error: error
    };
};

axios.interceptors.request.use(request => {
    console.log('Starting Request', request)
    return request
});

export const groupsGetAll = () => {
    return dispatch => {
        dispatch(getAllGroups());

        let url = 'https://beyond-bookmarks-api.herokuapp.com/api/v1/group'
        axios.get(url).then(response => {
            dispatch(getAllGroupsSuccess(response.data))
        }).catch(err => {
                dispatch(getAllGroupsFailure(err));
            }
        );
    };

};

export const groupSave = (groupName, clusterName, tribeName, ftName) => {
    return dispatch => {

        dispatch(saveGroup());

        const groupData = {
            groupName: groupName,
            clusterName: clusterName,
            tribeName: tribeName,
            ftName: ftName
        };

        let url = 'https://beyond-bookmarks-api.herokuapp.com/api/v1/group';

        axios.post(url, groupData).then(response => {
            console.log(response);
            dispatch(groupSaveSuccess());
        }).catch(err => {
            console.log('i am here');
            console.log(err);
            if (err) {
                /* if (err.response.data) {
                     dispatch(groupSaveFail(err.response.data.error));
                 } else {*/
                dispatch(groupSaveFail(err));
                /*}*/
            }
        });


    };
};