import {
	GOODS_FETCH_REQUESTED,
	GOODS_GET_REQUESTED,
	GOODS_GET_FOR_CATEGORY_REQUESTED,
	GOOD_ADD_REQUESTED,
	GOOD_UPDATE_REQUESTED,
	GOOD_DELETE_REQUESTED,
	GOODS_SEARCH_REQUESTED
} from './';

export function fetchGoods(payload) {
	return {
		type: GOODS_FETCH_REQUESTED,
		payload,
		meta: {
			thunk: true
		}
	};
}

export function getGood(payload) {
	return {
		type: GOODS_GET_REQUESTED, 
		payload,
		meta: {
			thunk: true
		}
	};
}

export function getGoodsForCategoy(payload) {
	return {
		type: GOODS_GET_FOR_CATEGORY_REQUESTED, 
		payload,
		meta: {
			thunk: true
		}
	};
}

export function addGood(payload) {
	return {
		type: GOOD_ADD_REQUESTED, 
		payload,
		meta: {
			thunk: true
		}
	};
}

export function updateGood(payload) {
	return {
		type: GOOD_UPDATE_REQUESTED, 
		payload,
		meta: {
			thunk: true
		}
	};
}

export function deleteGood(payload) {
	return {
		type: GOOD_DELETE_REQUESTED,
		payload,
		meta: {
			thunk: true
		}
	};
}

export function searchGoods(payload) {
	return {
		type: GOODS_SEARCH_REQUESTED,
		payload,
		meta: {
			thunk: true
		}
	};
}