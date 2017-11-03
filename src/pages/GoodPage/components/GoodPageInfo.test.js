import React from 'react';
import {shallow} from 'enzyme';

import GoodPageInfo from './GoodPageInfo';

describe('GoodPageInfo', () => {
    let enzymeWrapper;
    const goodMock = {
        "id": "12126gghh2",
        "name": "Good #2",
        "senderName": "Diana",
        "senderEmail": "sender@domain.com",
        "img": "http://127.0.0.1:8090/img/thumbnail.png",
        "categoryId": "sdfd45asd1",
        "body": "In dui magna, posuere eget, vestibulum et, tempor auctor, justo."
    };
    const props = {
        good: goodMock,
        categories: [],
        onSubmitGoodHandler: jest.fn(),
        onDeleteGoodHandler:jest.fn()
      };

    beforeEach(()=>{
        enzymeWrapper = shallow(<GoodPageInfo {...props} />)
    });

    it('render <GoodPageInfo />', () => {

        expect(enzymeWrapper).toHaveLength(1);

        //Good title
        expect(enzymeWrapper.find('h3').text()).toEqual(props.good.name);
    });
});