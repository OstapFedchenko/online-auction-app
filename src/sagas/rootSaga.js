import { fork, all } from 'redux-saga/effects';
import goodsSaga from './good';
import categoriesSaga from './category';
import usersSaga from './user';

const sagas = [
	...goodsSaga,
	...categoriesSaga,
	...usersSaga
];

export default function* root() {
	yield all(sagas.map(saga => fork(saga)));
}
