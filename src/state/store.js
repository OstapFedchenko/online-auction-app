import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { goodReducer } from './good';
import { categoryReducer } from './category';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
	routing: routerReducer,
	goods: goodReducer,
	categories: categoryReducer,
	form: formReducer
});

export default rootReducer;