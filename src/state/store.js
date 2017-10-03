import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { goodReducer } from './good';

const rootReducer = combineReducers({
	routing: routerReducer,
	goods: goodReducer
});

export default rootReducer;