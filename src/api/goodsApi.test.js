import {default as goodsApi} from './goodsApi';

describe('Good Api', () => {

    it('Fetch Goods', () => {

        expect.assertions(2);
        expect(goodsApi.fetchGoods).toBeDefined();

        return goodsApi
            .fetchGoods()
            .then(data => {
                expect(Array.isArray(data)).toBe(true)
            });
    });

    it('Get Good', () => {

        expect.assertions(3);
        expect(goodsApi.getGood).toBeDefined();

        return goodsApi
            .getGood("sdfd45asd")
            .then(data => {
                expect(typeof data).toBe('object');
                expect(data).toBeDefined();
            });
    });

    it('Get Good for category', () => {

        expect.assertions(2);
        expect(goodsApi.getGoodsForCategory).toBeDefined();

        return goodsApi
            .getGoodsForCategory("sdfd45asd1")
            .then(data => {
                expect(Array.isArray(data)).toBe(true)
            });
    });

    it('Add Good', () => {

        expect.assertions(3);
        expect(goodsApi.addGood).toBeDefined();

        let good = {
            "name": "Good #1",
            "senderName": "Mark",
            "senderEmail": "sender@domain.com",
            "img": "http://127.0.0.1:8090/img/thumbnail.png",
            "categoryId": "sdfd45asd1",
            "body": "Phasellus tempus. In ac felis quis tortor malesuada pretium."
        };

        return goodsApi
            .addGood(good)
            .then(data => {
                expect(typeof data).toBe('object');
                expect(data).toBeDefined();
            });
    });

    it('Update Good', () => {

        expect.assertions(3);
        expect(goodsApi.updateGood).toBeDefined();

        let good = {
            "id": "sdfd45asd",
            "name": "Good #1",
            "senderName": "Mark",
            "senderEmail": "sender@domain.com",
            "img": "http://127.0.0.1:8090/img/thumbnail.png",
            "categoryId": "sdfd45asd1",
            "body": "Phasellus tempus. In ac felis quis tortor malesuada pretium."
        };

        return goodsApi
            .updateGood(good)
            .then(data => {
                expect(typeof data).toBe('object');
                expect(data).toBeDefined();
            });
    });

    it('Delete Good', () => {

        expect.assertions(3);
        expect(goodsApi.deleteGood).toBeDefined();

        let good = {
            "id": "sdfd45asd",
            "name": "Good #1",
            "senderName": "Mark",
            "senderEmail": "sender@domain.com",
            "img": "http://127.0.0.1:8090/img/thumbnail.png",
            "categoryId": "sdfd45asd1",
            "body": "Phasellus tempus. In ac felis quis tortor malesuada pretium."
        };

        return goodsApi
            .deleteGood(good)
            .then(data => {
                expect(typeof data).toBe('object');
                expect(data).toBeDefined();
            });
    });

    it('Search Goods', () => {

        expect.assertions(2);
        expect(goodsApi.searchGoods).toBeDefined();

        return goodsApi
            .searchGoods('#3')
            .then(data => {
                expect(Array.isArray(data)).toBe(true)
            });
    });
});