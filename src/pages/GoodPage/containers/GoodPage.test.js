import React from 'react';
import {applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import createSagaMiddleware from 'redux-saga';
import {middleware} from 'redux-saga-thunk';

import GoodPage from './GoodPage';

describe('<GoodPage />', () => {
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [middleware, sagaMiddleware];
    const mockStore = configureStore(middlewares);

    const goods = [
        {
            "id": "sdfd45asd",
            "name": "Good #1",
            "senderName": "Mark",
            "senderEmail": "sender@domain.com",
            "img": "http://127.0.0.1:8090/img/thumbnail.png",
            "categoryId": "sdfd45asd1",
            "body": "Phasellus tempus. In ac felis quis tortor malesuada pretium."
        }, {
            "id": "12126gghh2",
            "name": "Good #2",
            "senderName": "Diana",
            "senderEmail": "sender@domain.com",
            "img": "http://127.0.0.1:8090/img/thumbnail.png",
            "categoryId": "sdfd45asd1",
            "body": "In dui magna, posuere eget, vestibulum et, tempor auctor, justo."
        }
    ];
    const initialState = {
        categories: [],
        goodStore: {
            goods: goods,
            selectedGood: goods[0]
        }
    };

    let store = mockStore(initialState),
        wrapper;

   /* beforeEach(() => {
        store = mockStore(initialState);

        wrapper = mount(<GoodPage store={store} />);
    })*/

    it('Snapshot of the component', () => {
       // let wrapper = renderer.create(<GoodPage store={store} />).toJSON();

        //expect(wrapper).toMatchSnapshot();
        console.log(store);
    });
});