import {CATEGORIES_FETCH_SUCCEEDED, CATEGORIES_ADD_SUCCEEDED} from './actions';
import categoryReducer from './reducer';

describe('Test category reducer', () => {

    it('Default', () => {
        expect(categoryReducer([], 'unexpected')).toEqual([]);
    });

    it('Init state', () => {
        expect(categoryReducer(undefined, {})).toEqual([]);
    })

    it('Fetch categories', () => {
        const action = {
            type: CATEGORIES_FETCH_SUCCEEDED,
            payload: [
                {
                    id: 'dasda',
                    name: 'Category 1'
                }, {
                    id: '232eadas',
                    name: 'Category 2'
                }
            ]
        };

        expect(categoryReducer([], action)).toEqual(action.payload);
    });

    it('Add category', () => {
        const action = {
            type: CATEGORIES_ADD_SUCCEEDED,
            payload: {
                name: 'New Category',
                id: '123'
            }
        };

        expect(categoryReducer([], action)).toEqual([action.payload]);
    })
});