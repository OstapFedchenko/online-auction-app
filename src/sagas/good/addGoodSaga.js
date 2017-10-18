import {call, put, takeLatest} from 'redux-saga/effects';
import {goodsApi} from '../../api';
import {GOOD_ADD_REQUESTED, GOOD_ADD_SUCCEEDED, GOOD_ADD_FAILED} from '../../state';

function* addGood(action) {

    try {
        const good = yield call(goodsApi.addGood, action.payload);
        yield put({type: GOOD_ADD_SUCCEEDED, payload: good});
    } catch (e) {
        console.error(e);
        yield put({type: GOOD_ADD_FAILED, payload: e});
    }
}

function* addGoodSaga() {
    yield takeLatest(GOOD_ADD_REQUESTED, addGood);
}

export default addGoodSaga;