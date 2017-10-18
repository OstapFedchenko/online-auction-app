import {call, put, takeLatest} from 'redux-saga/effects';
import {categoriesApi} from '../../api';
import {CATEGORIES_ADD_REQUESTED, CATEGORIES_ADD_SUCCEEDED, CATEGORIES_ADD_FAILED} from '../../state';

function* addCategory(action) {

    try {
        const category = yield call(categoriesApi.addCategory, action.payload);
        yield put({type: CATEGORIES_ADD_SUCCEEDED, payload: category});
    } catch (e) {
        console.error(e);
        yield put({type: CATEGORIES_ADD_FAILED, payload: e});
    }
}

function* addCategorySaga() {
    yield takeLatest(CATEGORIES_ADD_REQUESTED, addCategory);
}

export default addCategorySaga;