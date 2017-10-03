import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {rootReducer} from '../state';

const rountingMiddleware = routerMiddleware(browserHistory);

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export const history = syncHistoryWithStore(browserHistory, store);
