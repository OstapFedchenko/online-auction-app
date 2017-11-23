import {USERS_GET_REQUESTED, USERS_ADD_REQUESTED, USERS_LOGIN_REQUESTED, USERS_LOGOUT_REQUESTED} from './'

export function getUser(payload) {
    return {
        type: USERS_GET_REQUESTED,
        payload,
        meta: {
            thunk: true
        }
    };
}

export function addUser(payload) {
    return {
        type: USERS_ADD_REQUESTED,
        payload,
        meta: {
            thunk: true
        }
    }
}

export function loginUser(payload) {
    return {
        type: USERS_LOGIN_REQUESTED,
        payload,
        meta: {
            thunk: true
        }
    }
}

export function logoutUser(payload) {
    return {
        type: USERS_LOGOUT_REQUESTED,
        payload,
        meta: {
            thunk: true
        }
    }
}
