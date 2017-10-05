export const CATEGORIES_FETCH_REQUESTED = 'CATEGORIES::FETCH_REQUESTED';
export const CATEGORIES_FETCH_SUCCEEDED = 'CATEGORIES::FETCH_SUCCEEDED';
export const CATEGORIES_FETCH_FAILED = 'CATEGORIES::FETCH_FAILED';

export const CATEGORIES_SET = 'CATEGORIES::SET';

export function fetchCategories(payload){
    return {
        type: CATEGORIES_FETCH_REQUESTED,
        payload
    };
}

export function setCategories(payload){
    return{
        type: CATEGORIES_SET,
        payload
    };
}