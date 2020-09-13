import axios from 'axios';
import * as actionTypes from './actionTypes'

/*Active Creators for the Auth*/
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('userId');
    return {type: actionTypes.AUTH_LOGOUT}
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

/*using thunk we are going to do the async call while using redux*/
export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        //_NP.0N_FxYVxoHBLv_jmS5o2a1gj3azHeD
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB0pDps4ZLIcNiXCKmWq3bz4iRVsOa4mN0';
        if (!isSignup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB0pDps4ZLIcNiXCKmWq3bz4iRVsOa4mN0';
        }
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                const expirationTime = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationTime', expirationTime);
                /*is this wrong*/
                localStorage.setItem('userId', response.data.userId);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err.response.data.error));
            });
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationTime = localStorage.getItem('expirationTime');
            if (expirationTime > new Date()) {
                dispatch(authSuccess());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(logout(token, userId));
                dispatch(checkAuthTimeout(expirationTime.getSeconds() - new Date().getSeconds()));
            }
        }
    }
}