import {call, put, takeLatest} from 'redux-saga/effects';
import {goodsApi} from '../../api';
import {GOODS_FETCH_SUCCEEDED, GOODS_FETCH_FAILED, GOODS_FETCH_REQUESTED} from '../../state';

function* fetchGoods(action) {

    try {
        const goods = yield call(goodsApi.fetchGoods);
        yield put({type: GOODS_FETCH_SUCCEEDED, payload: goods, meta: action.meta});
    } catch (e) {
        console.log(e);
        yield put({type: GOODS_FETCH_FAILED, payload: e, error: true, meta: action.meta});
    }
}

function* fetchGoodsSaga() {
    yield takeLatest(GOODS_FETCH_REQUESTED, fetchGoods);
}

export default fetchGoodsSaga;