import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Redirect} from 'react-router';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {DEFAULT_ROUTE, SIGN_UP_ROUTE, LOGIN_ROUTE, NOT_FOUND_ROUTE, GOOD_ROUTE, CATEGORY_ROUTE, SEARCH_ROUTE, OPTIONAL_ID_ROUTE, OPTIONAL_SEARCH_VALUE_ROUTE} from './constants';
import App from './app.root.jsx';
import {store, history} from './context';
import {GoodsContent} from './components/Content';
import {NotFoundPage, GoodPage, CategoryPage, SearchPage, RegistrationPage, LoginPage} from './pages';

import './common/styles-common.css';

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={history}>
                <Route path={DEFAULT_ROUTE} component={App}>
                    <IndexRoute component={GoodsContent}/>
                    <Route path={SIGN_UP_ROUTE} component={RegistrationPage} />
                    <Route path={LOGIN_ROUTE} component={LoginPage} />
                    <Route path={`${GOOD_ROUTE}${OPTIONAL_ID_ROUTE}`} component={GoodPage}/>
                    <Route path={`${CATEGORY_ROUTE}${OPTIONAL_ID_ROUTE}`} component={CategoryPage}/>
                    <Route path={`${SEARCH_ROUTE}${OPTIONAL_SEARCH_VALUE_ROUTE}`} component={SearchPage}/>
                    <Route path={NOT_FOUND_ROUTE} component={NotFoundPage}/>
                    <Redirect from='*' to={NOT_FOUND_ROUTE}/>
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>,
 document.getElementById('root'));
registerServiceWorker();
