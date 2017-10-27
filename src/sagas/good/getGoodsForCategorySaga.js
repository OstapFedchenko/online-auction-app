import {call, put, takeLatest} from 'redux-saga/effects';
import {goodsApi} from '../../api';
import {GOODS_GET_FOR_CATEGORY_SUCCEEDED, GOODS_GET_FOR_CATEGORY_FAILED, GOODS_GET_FOR_CATEGORY_REQUESTED} from '../../state';

function* getGoodsForCategory(action) {

    try {
        const goods = yield call(goodsApi.getGoodsForCategory, action.payload);
        yield put({type: GOODS_GET_FOR_CATEGORY_SUCCEEDED, payload: goods, meta: action.meta});
    } catch (e) {
        console.log(e);
        yield put({type: GOODS_GET_FOR_CATEGORY_FAILED, payload: e, error: true, meta: action.meta});
    }
}

function* getGoodsForCategorySaga() {
    yield takeLatest(GOODS_GET_FOR_CATEGORY_REQUESTED, getGoodsForCategory);
}

export default getGoodsForCategorySaga;