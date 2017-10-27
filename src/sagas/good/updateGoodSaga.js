import {call, put, takeLatest} from 'redux-saga/effects';
import {goodsApi} from '../../api';
import {GOOD_UPDATE_REQUESTED, GOOD_UPDATE_SUCCEEDED, GOOD_UPDATE_FAILED} from '../../state';

function* updateGood(action) {

    try {
        const good = yield call(goodsApi.updateGood, action.payload);
        yield put({type: GOOD_UPDATE_SUCCEEDED, payload: good, meta: action.meta});
    } catch (e) {
        console.error(e);
        yield put({type: GOOD_UPDATE_FAILED, payload: e, error: true, meta: action.meta});
    }
}

function* updateGoodSaga() {
    yield takeLatest(GOOD_UPDATE_REQUESTED, updateGood);
}

export default updateGoodSaga;