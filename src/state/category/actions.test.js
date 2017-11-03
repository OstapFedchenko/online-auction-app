import {CATEGORIES_FETCH_REQUESTED, CATEGORIES_ADD_REQUESTED, fetchCategories, addCategory} from './actions';

describe('category actions', () => {

    it('Fetch categories action', () => {

        const expectedAction = {
            type: CATEGORIES_FETCH_REQUESTED,
            meta: {
                thunk: true
            }
        };

        expect(fetchCategories()).toEqual(expectedAction);
    });

    it('Add category action', () => {

        const payload = 'New Category';
        const expectedAction = {
            type: CATEGORIES_ADD_REQUESTED,
            meta: {
                thunk: true
            },
            payload
        };

        expect(addCategory(payload)).toEqual(expectedAction);
    });
})