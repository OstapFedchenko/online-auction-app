export const GOODS_FETCH_REQUESTED = 'GOODS::FETCH_REQUESTED';
export const GOODS_FETCH_SUCCEEDED = 'GOODS::FETCH_SUCCEEDED';
export const GOODS_FETCH_FAILED = 'GOODS::FETCH_FAILED';

export const GOODS_SET = 'GOODS::SET';

export const GOODS_SEARCH = 'GOODS::SEARCH';

export function fetchGoods(payload) {
	return {
		type: GOODS_FETCH_REQUESTED, 
		payload
	};
}

export function setGoods(payload){
	return {
		type: GOODS_SET,
		payload
	};
}

export function searchGoods(payload){
	return {
		type: GOODS_SEARCH,
		payload
	}
}