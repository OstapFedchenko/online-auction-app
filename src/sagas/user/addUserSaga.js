import {call, put, takeLatest} from 'redux-saga/effects';
import {usersApi} from '../../api';
import {USERS_ADD_REQUESTED, USERS_ADD_SUCCEEDED, USERS_ADD_FAILED} from '../../state';

function* addUser(action) {

    try {
        const user = yield call(usersApi.addUser, action.payload);
        yield put({type: USERS_ADD_SUCCEEDED, payload: user, meta: action.meta});
    } catch (e) {
        console.error(e);
        yield put({type: USERS_ADD_FAILED, payload: e, error: true, meta: action.meta});
    }
}

function* addUserSaga() {
    yield takeLatest(USERS_ADD_REQUESTED, addUser);
}

export default addUserSaga;