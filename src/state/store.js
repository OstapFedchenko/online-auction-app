import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { goodReducer } from './good';
import { categoryReducer } from './category';
import { combineForms } from 'react-redux-form';

import { initialCategoryState } from './../constants';

const rootReducer = combineReducers({
	routing: routerReducer,
	goods: goodReducer,
	categories: categoryReducer,
	form: combineForms({
    	category: initialCategoryState,
  }, 'form')
});

export default rootReducer;