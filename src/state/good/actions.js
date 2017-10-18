export const GOODS_FETCH_REQUESTED = 'GOODS::FETCH_REQUESTED';
export const GOODS_FETCH_SUCCEEDED = 'GOODS::FETCH_SUCCEEDED';
export const GOODS_FETCH_FAILED = 'GOODS::FETCH_FAILED';

export const GOOD_ADD_REQUESTED = 'GOODS::ADD_REQUESTED';
export const GOOD_ADD_SUCCEEDED = 'GOODS::ADD_SUCCEEDED';
export const GOOD_ADD_FAILED = 'GOODS::ADD_FAILED';

export const GOOD_DELETE_REQUESTED = 'GOOD::DELETE_REQUESTED';
export const GOOD_DELETE_SUCCEEDED = 'GOOD::DELETE_SUCCEEDED';
export const GOOD_DELETE_FAILED = 'GOOD::DELETE_FAILED';

export const GOOD_UPDATE_REQUESTED = 'GOOD::UPDATE_REQUESTED';
export const GOOD_UPDATE_SUCCEEDED = 'GOOD::UPDATE_SUCCEEDED';
export const GOOD_UPDATE_FAILED = 'GOOD::UPDATE_FAILED';

export const GOODS_SEARCH = 'GOODS::SEARCH';

export function fetchGoods(payload) {
	return {
		type: GOODS_FETCH_REQUESTED, 
		payload
	};
}

export function addGood(payload){
	return {
		type: GOOD_ADD_REQUESTED,
		payload
	}
}

export function updateGood(payload){
	return {
		type: GOOD_UPDATE_REQUESTED,
		payload
	}
}

export function deleteGood(payload){
	return {
		type: GOOD_DELETE_REQUESTED,
		payload
	}
}

export function searchGoods(payload){
	return {
		type: GOODS_SEARCH,
		payload
	}
}