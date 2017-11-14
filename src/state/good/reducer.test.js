import {
    GOODS_FETCH_SUCCEEDED,
    GOODS_GET_SUCCEEDED,
    GOODS_GET_FOR_CATEGORY_SUCCEEDED,
    GOOD_ADD_SUCCEEDED,
    GOOD_DELETE_SUCCEEDED,
    GOOD_UPDATE_SUCCEEDED,
    GOODS_SEARCH_SUCCEEDED
} from './';
import goodReducer from './reducer';

const goodsArray = [
    {
        "id": "12126gghh2",
        "name": "Good #2",
        "senderName": "Diana",
        "senderEmail": "sender@domain.com",
        "img": "http://127.0.0.1:8090/img/thumbnail.png",
        "categoryId": "sdfd45asd1",
        "body": "In dui magna, posuere eget, vestibulum et."
    }, {
        "id": "gdg544dsd6",
        "name": "Good #3",
        "senderName": "Hanna",
        "senderEmail": "sender@domain.com",
        "img": "http://127.0.0.1:8090/img/thumbnail.png",
        "categoryId": "sdfd45asd1",
        "body": "Nam pretium turpis et arcu."
    }
];
const initialState = {
    goods: [],
    selectedGood: null
};

const stateWithGoods = {
    goods: goodsArray,
    selectedGood: null
};

describe('Test good reducer', () => {

    it('Default', () => {

        expect(goodReducer(initialState, 'unexpected')).toEqual(initialState);
    });

    it('Init state', () => {
        expect(goodReducer(undefined, {})).toEqual(initialState);
    });

    it('Fetch goods', () => {

        const action = {
            type: GOODS_FETCH_SUCCEEDED,
            payload: goodsArray
        };

        expect(goodReducer(initialState, action)).toEqual(stateWithGoods);
    });

    it('Get good', () => {

        const action = {
            type: GOODS_GET_SUCCEEDED,
            payload: goodsArray[0]
        };

        const expectedState = {
            ...stateWithGoods,
            selectedGood: goodsArray[0]
        };

        expect(goodReducer(stateWithGoods, action)).toEqual(expectedState);
    });

    it('Get good for category', () => {

        const action = {
            type: GOODS_GET_FOR_CATEGORY_SUCCEEDED,
            payload: [goodsArray[1]]
        };

        const expectedState = {
            ...stateWithGoods,
            goods: [goodsArray[1]]
        };

        expect(goodReducer(stateWithGoods, action)).toEqual(expectedState);
    });

    it('Add good', () => {

        const action = {
            type: GOOD_ADD_SUCCEEDED,
            payload: {
                name: 'test name',
                senderName: 'test sender name',
                senderEmail: 'sender@mail.ru',
                img: 'test img url',
                categoryId: 'testcategoryId',
                body: 'test description of the good'
            }
        };

        expect(goodReducer(initialState, action)).toEqual({
            goods: [action.payload],
            selectedGood: null
        });
    });

    it('Update good', () => {

        const action = {
            type: GOOD_UPDATE_SUCCEEDED,
            payload: Object.assign({}, goodsArray[0], {name: 'Test update good'})
        };

        const expectedState = {
            selectedGood: action.payload,
            goods: stateWithGoods
                .goods
                .map((item) => {
                    if (item.id !== action.payload.id) {
                        return item;
                    }
                    return {
                        ...item,
                        ...action.payload
                    };
                })
        };

        expect(goodReducer(stateWithGoods, action)).toEqual(expectedState);
    });

    it('Delete good', () => {

        const action = {
            type: GOOD_DELETE_SUCCEEDED,
            payload: goodsArray[0]
        };

        const expectedState = {
            selectedGood: null,
            goods: [goodsArray[1]]
        };

        expect(goodReducer(stateWithGoods, action)).toEqual(expectedState);
    });

    it('Search good', () => {

        const action = {
            type: GOODS_SEARCH_SUCCEEDED,
            payload: [goodsArray[0]]
        };

        const expectedState = {
            selectedGood: null,
            goods: [goodsArray[0]]
        }

        expect(goodReducer(stateWithGoods, action)).toEqual(expectedState);
    });
});