import {call, put, takeLatest} from 'redux-saga/effects';
import {usersApi} from '../../api';
import {USERS_GET_REQUESTED, USERS_GET_SUCCEEDED, USERS_GET_FAILED} from '../../state';

function* getUser(action) {

    try {
        const user = yield call(usersApi.getUser, action.payload);
        yield put({type: USERS_GET_SUCCEEDED, payload: user, meta: action.meta});
    } catch (e) {
        console.error(e);
        yield put({type: USERS_GET_FAILED, payload: e, error: true, meta: action.meta});
    }
}

function* getUserSaga() {
    yield takeLatest(USERS_GET_REQUESTED, getUser);
}

export default getUserSaga;