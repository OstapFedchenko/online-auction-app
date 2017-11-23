import {call, put, takeLatest} from 'redux-saga/effects';

import {usersApi} from '../../api';
import {USERS_LOGIN_REQUESTED, USERS_LOGIN_SUCCEEDED, USERS_LOGIN_FAILED} from '../../state';

function* loginUser(action) {

    try {
        const user = yield call(usersApi.loginUser, action.payload);
        yield put({type: USERS_LOGIN_SUCCEEDED, payload: user, meta: action.meta});
    } catch (e) {
        yield put({type: USERS_LOGIN_FAILED, payload: e, error: true, meta: action.meta});
    }
}

function* loginUserSaga() {
    yield takeLatest(USERS_LOGIN_REQUESTED, loginUser);
}

export default loginUserSaga;