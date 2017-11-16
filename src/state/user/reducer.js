import {USERS_GET_SUCCEEDED, USERS_ADD_SUCCEEDED} from './';

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
                ...state,
                users: [
                    ...state.users,
                    payload
                ]
            };

        default:
            return state;

    }
};

export default userReducer;