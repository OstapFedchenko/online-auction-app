import {
    GOODS_FETCH_SUCCEEDED, 
    GOOD_ADD_SUCCEEDED, 
    GOOD_DELETE_SUCCEEDED, 
    GOOD_UPDATE_SUCCEEDED, 
    GOODS_SEARCH 
} from './actions';

const initialState = [];
let _goods = [];

function goodReducer(state = initialState, action = {}) {
    const {type, payload} = action;
    switch (type) {

        case GOODS_FETCH_SUCCEEDED:

            _goods = [...payload];
            return [...payload];

        case GOOD_ADD_SUCCEEDED:

            _goods = [
                ...state,
                payload
            ];

            return [
                ...state,
                payload
            ];
        case GOOD_UPDATE_SUCCEEDED:
            
            _goods = state.map((item) => {
				if(item.id !== payload.id) {
						return item;
				}
				return {
						...item,
						...payload
                };    
            });

            return state.map((item) => {
				if(item.id !== payload.id) {
						return item;
				}
				return {
						...item,
						...payload
                };    
            }); 
		
        case GOOD_DELETE_SUCCEEDED:
            _goods = state.filter(item => item.id !== payload.id);
            
            return state.filter(item => item.id !== payload.id);
       
        case GOODS_SEARCH:

            let filteredGoods = _goods.filter(item => {
                let searchValue = item
                    .name
                    .toLowerCase();
                return searchValue.indexOf(payload) !== -1;
            });

            return [...filteredGoods];

        default:
            return state;

    }
};

export default goodReducer;