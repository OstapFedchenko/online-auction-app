import categories from '../../public/categories.json';

function fetchCategories() {
    return Promise.resolve(categories);
};

export default { fetchCategories };
