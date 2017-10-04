export const GOODS_FETCH_REQUESTED = 'GOODS::FETCH_REQUESTED';
export const GOODS_FETCH_SUCCEEDED = 'GOODS::FETCH_SUCCEEDED';
export const GOODS_FETCH_FAILED = 'GOODS::FETCH_FAILED';

export function fetchGoods(payload) {
	return {
		type: GOODS_FETCH_REQUESTED, 
		payload
	};
}

export function setGoods(payload){
	return {
		type: GOODS_FETCH_SUCCEEDED,
		payload
	};
}