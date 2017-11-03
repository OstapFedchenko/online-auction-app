export const CATEGORIES_FETCH_REQUESTED = 'CATEGORIES::FETCH_REQUESTED';
export const CATEGORIES_FETCH_SUCCEEDED = 'CATEGORIES::FETCH_SUCCEEDED';
export const CATEGORIES_FETCH_FAILED = 'CATEGORIES::FETCH_FAILED';

export const CATEGORIES_ADD_REQUESTED = 'CATEGORIES::ADD_REQUESTED';
export const CATEGORIES_ADD_SUCCEEDED = 'CATEGORIES::ADD_SUCCEEDED';
export const CATEGORIES_ADD_FAILED = 'CATEGORIES::ADD_FAILED';

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