import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    error: null,
    loading: false,
    card: null,
    update_card: null,
    cards: null
};

const cardCreateStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const cardCreateSuccess = (state, action) => {
    return updateObject(state, {loading: false});
};

const cardCreateFailure = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const cardUpdateStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const cardUpdateSuccess = (state, action) => {
    return updateObject(state, {loading: false});
};

const cardUpdateFailure = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

/*read one card*/
const cardReadStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const cardReadSuccess = (state, action) => {
    return updateObject(state,
        {
            loading: false,
            update_card: action.card,
            card: action.card
        });
};

const cardReadFailure = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

/*read all cards for a group*/
const groupCardReadStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const groupCardReadSuccess = (state, action) => {
    return updateObject(state,
        {
            loading: false,
            cards: action.cards
        });
};

const groupCardReadFailure = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CARD_CREATE_START:
            return cardCreateStart(state, action);
        case actionTypes.CARD_CREATE_SUCCESS:
            return cardCreateSuccess(state, action);
        case actionTypes.CARD_CREATE_FAILURE:
            return cardCreateFailure(state, action);
        case actionTypes.CARD_UPDATE_START:
            return cardUpdateStart(state, action);
        case actionTypes.CARD_UPDATE_SUCCESS:
            return cardUpdateSuccess(state, action);
        case actionTypes.CARD_UPDATE_FAILURE:
            return cardUpdateFailure(state, action);
        case actionTypes.CARD_READ_START:
            return cardReadStart(state, action);
        case actionTypes.CARD_READ_SUCCESS:
            return cardReadSuccess(state, action);
        case actionTypes.CARD_READ_FAILURE:
            return cardReadFailure(state, action);
        case actionTypes.GROUP_CARD_READ_START:
            return groupCardReadStart(state, action);
        case actionTypes.GROUP_CARD_READ_SUCCESS:
            return groupCardReadSuccess(state, action);
        case actionTypes.GROUP_CARD_READ_FAILURE:
            return groupCardReadFailure(state, action);
        default:
            return state;

    }
}

export default reducer;