
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Redirect } from 'react-router';
import {Provider} from 'react-redux';

import {DEFAULT_ROUTE, NOT_FOUND_ROUTE, GOOD_ROUTE, CATEGORY_ROUTE, OPTIONAL_ID_ROUTE} from './constants';
import App from './app.root.jsx';
import {store, history} from './context';
import {GoodsContent} from './components/Content';
import { NotFoundPage, GoodPage, CategoryPage } from './pages';

import './styles-common.less';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path={DEFAULT_ROUTE} component={App}>
                <IndexRoute component={GoodsContent}/>
                <Route path={`${GOOD_ROUTE}${OPTIONAL_ID_ROUTE}`} component={GoodPage}/>
				<Route path={`${CATEGORY_ROUTE}${OPTIONAL_ID_ROUTE}`} component={CategoryPage}/>
                <Route path={NOT_FOUND_ROUTE} component={NotFoundPage}/>
                <Redirect from='*' to={NOT_FOUND_ROUTE} />
            </Route>
        </Router>
    </Provider>
, document.getElementById('root'));