import {call, put, takeLatest} from 'redux-saga/effects';
import {categoriesApi} from '../../api';
import {CATEGORIES_FETCH_SUCCEEDED, CATEGORIES_FETCH_FAILED, CATEGORIES_FETCH_REQUESTED} from '../../state';

function* fetchCategories(action) {

    try {
        const categories = yield call(categoriesApi.fetchCategories);
        yield put({type: CATEGORIES_FETCH_SUCCEEDED, payload: categories});
    } catch (e) {
        console.error(e);
        yield put({type: CATEGORIES_FETCH_FAILED, payload: e});
    }
}

function* fetchCategoriesSaga() {
    yield takeLatest(CATEGORIES_FETCH_REQUESTED, fetchCategories);
}

export default fetchCategoriesSaga;