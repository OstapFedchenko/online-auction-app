import {USERS_GET_REQUESTED, USERS_ADD_REQUESTED} from './'

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