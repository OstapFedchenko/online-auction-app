import {USERS_GET_SUCCEEDED, USERS_ADD_SUCCEEDED, USERS_LOGIN_SUCCEEDED, USERS_LOGOUT_SUCCEEDED } from './';

const initialState = {
    users: [],
    selectedUser: null
};

function userReducer(state = initialState, action = {}) {
    const {type, payload} = action;

    switch (type) {

        case USERS_GET_SUCCEEDED:
            return {
                ...state,
                selectedUser: payload
            };

        case USERS_ADD_SUCCEEDED:
            return {
                selectedUser: payload,
                users: [
                    ...state.users,
                    payload
                ]
            };

        case USERS_LOGIN_SUCCEEDED:
            return {
                ...state,
                selectedUser: payload
            };
        
        case USERS_LOGOUT_SUCCEEDED:
            return {
                ...state,
                selectedUser: null
            };

        default:
            return state;

    }
};

export default userReducer;