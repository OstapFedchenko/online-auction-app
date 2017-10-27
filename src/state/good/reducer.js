import {
    GOODS_FETCH_SUCCEEDED,
    GOODS_GET_SUCCEEDED,
    GOODS_GET_FOR_CATEGORY_SUCCEEDED,
    GOOD_ADD_SUCCEEDED,
    GOOD_DELETE_SUCCEEDED,
    GOOD_UPDATE_SUCCEEDED,
    GOODS_SEARCH_SUCCEEDED
} from './actions';

const initialState = {
    goods: [],
    selectedGood: null
};

let _goodStore = {
    goods: [],
    selectedGood: null
};

function goodReducer(state = initialState, action = {}) {
    const {type, payload} = action;
    switch (type) {

        case GOODS_FETCH_SUCCEEDED:
            _goodStore = {
                ...state,
                goods: [...payload]
            };

            return _goodStore;

        case GOODS_GET_FOR_CATEGORY_SUCCEEDED:

            _goodStore = {
                ...state,
                goods: [...payload]
            };

            return _goodStore;
            //todo: it will be moved to separate reducer in future
        case '@@router/LOCATION_CHANGE':
            _goodStore = {
                ...state,
                selectedGood: null
            };

            return _goodStore;

        case GOODS_GET_SUCCEEDED:

            _goodStore = {
                ...state,
                selectedGood: payload
            };

            return _goodStore;
        
        case GOOD_ADD_SUCCEEDED:

            _goodStore = {
                ...state,
                goods: [
                    ...state.goods,
                    payload
                ]
            };

            return _goodStore;

        case GOOD_UPDATE_SUCCEEDED:

            _goodStore = {
                ...state,
                goods: state
                    .goods
                    .map((item) => {
                        if (item.id !== payload.id) {
                            return item;
                        }
                        return {
                            ...item,
                            ...payload
                        };
                    })
            };

            return _goodStore;

        case GOOD_DELETE_SUCCEEDED:
            _goodStore = {
                ...state,
                goods: state
                    .goods
                    .filter(item => item.id !== payload.id)
            };

            return _goodStore;

        case GOODS_SEARCH_SUCCEEDED:

            _goodStore = {
                ...state,
                goods: [...payload]
            };

            return _goodStore;

        default:
            return state;

    }
};

export default goodReducer;