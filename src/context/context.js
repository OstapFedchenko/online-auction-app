import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from '../state';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const rountingMiddleware = routerMiddleware(browserHistory);

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        compose(
            applyMiddleware(rountingMiddleware),
            applyMiddleware(sagaMiddleware)
        )
    )
);

export const history = syncHistoryWithStore(browserHistory, store);
sagaMiddleware.run(rootSaga);