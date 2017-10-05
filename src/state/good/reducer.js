import {
    GOODS_FETCH_SUCCEEDED,
    GOODS_SET,
    GOODS_SEARCH
} from './actions';

const initialState = [];
let _goods = [];

function goodReducer(state = initialState, action = {}) {
    const {type, payload} = action;
    console.log(type);
    switch (type) {

        case GOODS_FETCH_SUCCEEDED:
        case GOODS_SET:
            console.log('Loading goods succesed');
            console.log(`Goods ${payload}`);
            _goods = [...payload];
            return [...payload];

        case GOODS_SEARCH:
            console.log('Searching...');

            let filteredGoods = _goods.filter( item=> {
            let searchValue = item.name.toLowerCase();
                return searchValue.indexOf(payload) !== -1;
            });
            console.log(filteredGoods);
            return[...filteredGoods];

        default:
            return state;

    }
};

export default goodReducer;