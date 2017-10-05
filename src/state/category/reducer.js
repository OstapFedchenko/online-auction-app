import {CATEGORIES_FETCH_SUCCEEDED, CATEGORIES_SET} from './actions';

const initialState = [];

function categoryReducer(state = initialState, action = {}) {
    const {type, payload} = action;

    switch (type) {

        case CATEGORIES_FETCH_SUCCEEDED:
        case CATEGORIES_SET:
            console.log('Loading categories succesed');
            console.log(`Categories ${payload}`);
            return [...payload];

        default:
            return state;

    }
};

export default categoryReducer;