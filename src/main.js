
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Redirect} from 'react-router';
import {Provider} from 'react-redux';

import {DEFAULT_ROUTE, NOT_FOUND_ROUTE, OPTIONAL_ID_ROUTE} from './constants';
import App from './app.root.jsx';
import {store, history} from './context';
import { NotFoundPage } from './pages';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path={DEFAULT_ROUTE} component={App}>
                <IndexRoute component={App}/>
                <Route path={NOT_FOUND_ROUTE} component={NotFoundPage}></Route>
                <Redirect from='*' to={NOT_FOUND_ROUTE} />
            </Route>
        </Router>
    </Provider>
, document.getElementById('root'));