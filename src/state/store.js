import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import { goodReducer } from './good';
import { categoryReducer } from './category';

const rootReducer = combineReducers({
	routing: routerReducer,
	form: formReducer,
	goods: goodReducer,
	categories: categoryReducer
});

export default rootReducer;