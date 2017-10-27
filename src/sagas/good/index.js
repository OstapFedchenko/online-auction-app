import goodsSaga from './fetchGoodsSaga';
import addGoodSaga from './addGoodSaga';
import updateGoodSaga from './updateGoodSaga';
import deleteGoodSaga from './deleteGoodSaga';
import getGood from './getGoodSaga';
import getGoodsForCategorySaga from './getGoodsForCategorySaga';
import searchGoodsSaga from './searchGoodsSaga';

export default [ 
	goodsSaga,
	getGood,
	addGoodSaga,
	updateGoodSaga,
	deleteGoodSaga,
	getGoodsForCategorySaga,
	searchGoodsSaga
];