import { isPending } from 'redux-saga-thunk';

import { 
	CATEGORIES_FETCH_REQUESTED,
	CATEGORIES_ADD_REQUESTED,
	GOODS_FETCH_REQUESTED,
	GOOD_ADD_REQUESTED,
	GOOD_DELETE_REQUESTED,
	GOOD_UPDATE_REQUESTED
} from '../state';

function isAnyFetchLoading(state) {
	return isPending(state, CATEGORIES_FETCH_REQUESTED) 
		|| isPending(state, GOODS_FETCH_REQUESTED);
}

function isAnyGoodActionLoading(state) {
	return isPending(state, GOOD_ADD_REQUESTED)
		|| isPending(state, GOOD_DELETE_REQUESTED)
		|| isPending(state, GOOD_UPDATE_REQUESTED);
}

function isAnyCategoryActionLoading(state) {
	return isPending(state, CATEGORIES_ADD_REQUESTED);
}

const loading = { isAnyFetchLoading, isAnyGoodActionLoading, isAnyCategoryActionLoading };

export { loading };