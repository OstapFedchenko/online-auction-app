import {CATEGORIES_FETCH_REQUESTED, CATEGORIES_ADD_REQUESTED} from './'

export function fetchCategories(payload) {
    return {
        type: CATEGORIES_FETCH_REQUESTED,
        payload,
        meta: {
            thunk: true
        }
    };
}

export function addCategory(payload) {
    return {
        type: CATEGORIES_ADD_REQUESTED,
        payload,
        meta: {
            thunk: true
        }
    }
}