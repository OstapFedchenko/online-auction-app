import {call, put, takeLatest} from 'redux-saga/effects';
import {goodsApi} from '../../api';
import {GOOD_DELETE_REQUESTED, GOOD_DELETE_SUCCEEDED, GOOD_DELETE_FAILED} from '../../state';

function* deleteGood(action) {

    try {
        yield call(goodsApi.deleteGood, action.payload);
        yield put({type: GOOD_DELETE_SUCCEEDED, payload: action.good, meta: action.meta});
    } catch (e) {
        console.error(e);
        yield put({type: GOOD_DELETE_FAILED, payload: e, error: true, meta: action.meta});
    }
}

function* deleteGoodSaga() {
    yield takeLatest(GOOD_DELETE_REQUESTED, deleteGood);
}

export default deleteGoodSaga;