import { fork, all } from 'redux-saga/effects';
import goodsSaga from './good';
import categoriesSaga from './category';

const sagas = [
	...goodsSaga,
	...categoriesSaga
];

export default function* root() {
	yield all(sagas.map(saga => fork(saga)));
}
