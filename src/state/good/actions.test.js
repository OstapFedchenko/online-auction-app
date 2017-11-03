import {
    GOODS_FETCH_REQUESTED,
    GOODS_GET_REQUESTED,
    GOODS_GET_FOR_CATEGORY_REQUESTED,
    GOOD_ADD_REQUESTED,
    GOOD_DELETE_REQUESTED,
    GOOD_UPDATE_REQUESTED,
    GOODS_SEARCH_REQUESTED,
    fetchGoods,
    getGood,
    getGoodsForCategoy,
    addGood,
    updateGood,
    deleteGood,
    searchGoods
} from './actions';

describe('Good actions', () => {

    it('Fetch good action', () => {

        const expectedAction = {
            type: GOODS_FETCH_REQUESTED,
            meta: {
                thunk: true
            }
        };

        expect(fetchGoods()).toEqual(expectedAction);
    });

    it('Get good action', () => {

        const payload = '21';
        const expectedAction = {
            type: GOODS_GET_REQUESTED,
            payload,
            meta: {
                thunk: true
            }
        };

        expect(getGood(payload)).toEqual(expectedAction);
    });

    it('Get good for category action', () => {

        const payload = '22';
        const expectedAction = {
            type: GOODS_GET_FOR_CATEGORY_REQUESTED,
            payload,
            meta: {
                thunk: true
            }
        };

        expect(getGoodsForCategoy(payload)).toEqual(expectedAction);
    });

    it('Add good action', () => {

        const payload = {
            name: 'test name',
            senderName: 'test sender name',
            senderEmail: 'sender@mail.ru',
            img: 'test img url',
            categoryId: 'testcategoryId',
            body: 'test description of the good'
        };
        const expectedAction = {
            type: GOOD_ADD_REQUESTED,
            payload,
            meta: {
                thunk: true
            }
        };

        expect(addGood(payload)).toEqual(expectedAction);
    });

    it('Update good action', () => {

        const payload = {
            id: '2321',
            name: 'test name',
            senderName: 'test sender name',
            senderEmail: 'sender@mail.ru',
            img: 'test img url',
            categoryId: 'testcategoryId',
            body: 'test description of the good'
        };
        const expectedAction = {
            type: GOOD_UPDATE_REQUESTED,
            payload,
            meta: {
                thunk: true
            }
        };

        expect(updateGood(payload)).toEqual(expectedAction);
    });

    it('Delete good action', () => {

        const payload = '321321';
        const expectedAction = {
            type: GOOD_DELETE_REQUESTED,
            payload,
            meta: {
                thunk: true
            }
        };

        expect(deleteGood(payload)).toEqual(expectedAction);
    });

    it('Search good action', () => {

        const payload = "searchValue";
        const expectedAction = {
            type: GOODS_SEARCH_REQUESTED,
            payload,
            meta: {
                thunk: true
            }
        };

        expect(searchGoods(payload)).toEqual(expectedAction);
    });
});