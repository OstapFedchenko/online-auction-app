import {call, put, takeLatest} from 'redux-saga/effects';
import {goodsApi} from '../../api';
import {GOODS_GET_SUCCEEDED, GOODS_GET_FAILED, GOODS_GET_REQUESTED} from '../../state';

function* getGood(action) {

    try {
        const good = yield call(goodsApi.getGood, action.payload);
        yield put({type: GOODS_GET_SUCCEEDED, payload: good, meta: action.meta});
    } catch (e) {
        console.log(e);
        yield put({type: GOODS_GET_FAILED, payload: e, error: true, meta: action.meta});
    }
}

function* getGoodSaga() {
    yield takeLatest(GOODS_GET_REQUESTED, getGood);
}

export default getGoodSaga;