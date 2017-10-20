import categories from '../../public/categories.json';
import { SubmissionError } from 'redux-form';

function fetchCategories() {
    return new Promise((resolve) => {
     setTimeout(() => {
       resolve(categories);
     }, 3000);
   });
};

function addCategory(category) {
    let updatedCategory = Object.assign({}, category);
    updatedCategory.id = updatedCategory.name + '732';

    return Promise.resolve(updatedCategory);
};

function checkCategoryName(name) {
    let found = categories.filter(cat => cat.name === name);

    if(!!found)
        throw {name: 'Category with such name already exists'};

    return Promise.resolve(!!found);
}

export default {
    fetchCategories,
    addCategory,
    checkCategoryName
};
