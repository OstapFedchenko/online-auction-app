import {call, put, takeLatest} from 'redux-saga/effects';

import {usersApi} from '../../api';
import {USERS_LOGOUT_REQUESTED, USERS_LOGOUT_SUCCEEDED, USERS_LOGOUT_FAILED} from '../../state';

function* logoutUser(action) {

    try {
        const user = yield call(usersApi.logoutUser, action.payload);
        yield put({type: USERS_LOGOUT_SUCCEEDED, payload: user, meta: action.meta});
    } catch (e) {
        yield put({type: USERS_LOGOUT_FAILED, payload: e, error: true, meta: action.meta});
    }
}

function* logoutUserSaga() {
    yield takeLatest(USERS_LOGOUT_REQUESTED, logoutUser);
}

export default logoutUserSaga;