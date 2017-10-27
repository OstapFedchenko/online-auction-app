import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { goodReducer } from './good';
import { categoryReducer } from './category';
import { reducer as formReducer } from 'redux-form'
import { reducer as thunkReducer } from 'redux-saga-thunk';

const rootReducer = combineReducers({
	routing: routerReducer,
	goodStore: goodReducer,
	categories: categoryReducer,
	form: formReducer,
	thunk: thunkReducer
});

export default rootReducer;