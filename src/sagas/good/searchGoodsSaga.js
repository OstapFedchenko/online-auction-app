import {call, put, takeLatest} from 'redux-saga/effects';
import {goodsApi} from '../../api';
import {GOODS_SEARCH_REQUESTED, GOODS_SEARCH_SUCCEEDED, GOODS_SEARCH_FAILED} from '../../state';

function* searchGoods(action) {

    try {
        const goods = yield call(goodsApi.searchGoods, action.payload);
        yield put({type: GOODS_SEARCH_SUCCEEDED, payload: goods, meta: action.meta});
    } catch (e) {
        console.log(e);
        yield put({type: GOODS_SEARCH_FAILED, payload: e, error: true, meta: action.meta});
    }
}

function* searchGoodsSaga() {
    yield takeLatest(GOODS_SEARCH_REQUESTED, searchGoods);
}

export default searchGoodsSaga;