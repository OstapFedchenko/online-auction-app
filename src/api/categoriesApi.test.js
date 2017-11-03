import {default as categoriesApi} from './categoriesApi';

describe('Categories Api', () => {

    it('Fetch categories', () => {

        expect.assertions(2);
        expect(categoriesApi.fetchCategories).toBeDefined();

        return categoriesApi
            .fetchCategories()
            .then(data => {
                expect(Array.isArray(data)).toBe(true)
            });
    });

    it('Add category', () => {

        expect.assertions(3);
        expect(categoriesApi.addCategory).toBeDefined();

        let category = {
            name: 'Test Category'
        };

        return categoriesApi
            .addCategory(category)
            .then(data => {
                expect(typeof data).toBe('object');
                expect(data).toBeDefined();
            });
    });
});