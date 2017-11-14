import axios from 'axios';

import {CATEGORY_API_URL} from '../constants/';

function fetchCategories() {
    return axios
        .get(CATEGORY_API_URL)
        .then(result => result.data);
};

function addCategory(category) {
    return axios
        .post(CATEGORY_API_URL, category)
        .then(res => res.data);
};

/*function checkCategoryName(name) {
    let found = categories.filter(cat => cat.name === name);

    if(!!found)
        throw {name: 'Category with such name already exists'};

    return Promise.resolve(!!found);
}*/

export default {
    fetchCategories,
    addCategory,
    //checkCategoryName
};
