import {GOODS_FETCH_SUCCEEDED} from './actions';

const initialState = [];

function goodReducer(state = initialState, action = {}) {
    const {type, payload} = action;

    switch (type) {

        case GOODS_FETCH_SUCCEEDED:
            console.log('Loading succesed');
            return [...payload];

        default:
            return state;

    }
};

export default goodReducer;