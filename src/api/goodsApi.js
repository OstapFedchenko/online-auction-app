import axios from 'axios';

import {API_URL, GOOD_API_URL} from '../constants/';

function fetchGoods() {
    return axios
        .get(GOOD_API_URL)
        .then(result => result.data);
};

function getGood(goodId) {

    return axios
        .get(`${GOOD_API_URL}${goodId}`)
        .then(result => result.data);
};

function getGoodsForCategory(categoryId) {

    return axios
        .get(`${API_URL}goods?categoryId=${categoryId}`)
        .then(result => result.data);
};

function addGood(good) {

    return axios
        .post(GOOD_API_URL, good)
        .then(result => result.data);
};

function updateGood(good) {

    return axios
        .put(`${GOOD_API_URL}${good.id}`, good)
        .then(result => result.data);
};

function deleteGood(good) {

    return axios
        .delete(`${GOOD_API_URL}${good.id}`)
        .then(result => result.data);
};

function searchGoods(value) {

    return axios
        .get(`${API_URL}goods?name_like=${value}`)
        .then(result => result.data);
};

export default {
    fetchGoods,
    getGood,
    getGoodsForCategory,
    addGood,
    updateGood,
    deleteGood,
    searchGoods
};
