import {CATEGORIES_FETCH_SUCCEEDED, CATEGORIES_ADD_SUCCEEDED} from './actions';

const initialState = [];

function categoryReducer(state = initialState, action = {}) {
    const {type, payload} = action;

    switch (type) {

        case CATEGORIES_FETCH_SUCCEEDED:
            return [...payload];

        case CATEGORIES_ADD_SUCCEEDED:
            return [...state, payload];

        default:
            return state;

    }
};

export default categoryReducer;