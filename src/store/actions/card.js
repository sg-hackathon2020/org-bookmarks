import axios from 'axios';
import * as actionTypes from './actionTypes'

/***
 CARD CREATE ACTIONS
 ***/

export const cardCreateStart = () => {
    return {
        type: actionTypes.CARD_CREATE_START
    };
};

export const cardCreateSuccess = () => {
    return {
        type: actionTypes.CARD_CREATE_SUCCESS
    };
};

export const cardCreateFailure = (error) => {
    return {
        type: actionTypes.CARD_CREATE_FAILURE,
        error: error
    };
};

/***
 CARD UPDATE ACTIONS
 ***/
export const cardUpdateStart = () => {
    return {
        type: actionTypes.CARD_UPDATE_START
    };
};

export const cardUpdateSuccess = () => {
    return {
        type: actionTypes.CARD_UPDATE_SUCCESS
    };
};

export const cardUpdateFailure = (error) => {
    return {
        type: actionTypes.CARD_UPDATE_FAILURE,
        error: error
    };
};

/***
 Fetch a single card
 ***/
export const cardReadStart = () => {
    return {
        type: actionTypes.CARD_READ_START
    };
};

export const cardReadSuccess = (card) => {
    return {
        type: actionTypes.CARD_READ_SUCCESS,
        card: card
    };
};

export const cardReadFailure = (error) => {
    return {
        type: actionTypes.CARD_READ_FAILURE,
        error: error
    };
};

/***
 Fetch all cards for a single group
 ***/
export const groupCardReadStart = () => {
    return {
        type: actionTypes.GROUP_CARD_READ_START
    };
};

export const groupCardReadSuccess = (cards) => {
    return {
        type: actionTypes.GROUP_CARD_READ_SUCCESS,
        cards: cards
    };
};

export const groupCardReadFailure = (error) => {
    return {
        type: actionTypes.GROUP_CARD_READ_FAILURE,
        error: error
    };
};


export const readCard = (groupId, cardId, withGroup) => {
    return dispatch => {
        dispatch(cardReadStart());
        let resourceUrl = `http://localhost:8080/groups/cards/${cardId}`;
        axios.get(resourceUrl).then(response => {
            dispatch(cardReadSuccess(response.data));
        }).catch(err => {
            dispatch(cardReadFailure(err));
        });
    };
};

export const readGroupCard = (groupId) => {
    return dispatch => {
        dispatch(groupCardReadStart());
        let resourceUrl = `http://localhost:8080/api/v1/groups/${groupId}/cards/`;
        axios.get(resourceUrl).then(response => {
            console.log(response);
            dispatch(groupCardReadSuccess(response.data));
        }).catch(err => {
            dispatch(groupCardReadFailure(err));
        });
    };
};


function extractCardData(title, description, url, groupId) {
    return {
        title: title,
        description: description,
        url: url,
        groupId: groupId
    };
}

export const updateCard = (title, description, url, groupId) => {
    return dispatch => {
        dispatch(cardUpdateStart());
        const cardData = extractCardData(title, description, url, groupId);


        let resourceUrl = `http://localhost:8080/groups/${groupId}/cards`;

        axios.put(resourceUrl, cardData).then(response => {
            dispatch(cardUpdateSuccess());
        }).catch(err => {
            dispatch(cardUpdateFailure(err));
        });
    };
};

export const createCard = (title, description, url, groupId) => {
    return dispatch => {
        dispatch(cardCreateStart());
        const cardData = extractCardData(title, description, url, groupId);
        let resourceUrl = `http://localhost:8080/groups/${groupId}/cards`;

        axios.post(resourceUrl, cardData).then(response => {
            dispatch(cardCreateSuccess());
        }).catch(err => {
            dispatch(cardCreateFailure(err));
        });

    };
};