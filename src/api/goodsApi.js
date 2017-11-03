import goods from '../temporarry/goods.json';

function fetchGoods() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(goods);
        }, 2000);
    });
};

function getGood(goodId) {

    return new Promise((resolve) => {
        setTimeout(() => {
            let good = goods.find(good => good.id.toString() === goodId.toString());

            resolve(good);
        }, 1000);
    });
};

function getGoodsForCategory(categoryId) {

    return new Promise((resolve) => {
        setTimeout(() => {
            let categoryGoods = goods.filter(good => good.categoryId.toString() === categoryId.toString());

            resolve(categoryGoods);
        }, 1000);
    });
};

function addGood(good) {
    let firstGood = goods[0];
    let updatedGood = {
        ...firstGood,
        ...good
    };

    updatedGood.id += updatedGood.name;

    return Promise.resolve(updatedGood);
}

function updateGood(good) {

    return Promise.resolve(good);
}

function deleteGood(good) {

    return Promise.resolve(good);
}

function searchGoods(value) {

    return new Promise((resolve) => {
        setTimeout(() => {
            let filteredGoods = goods.filter(item => {
                let searchValue = item.name.toLowerCase();

                return searchValue.indexOf(value) !== -1;
            });

            resolve(filteredGoods);
        }, 1000);
    });
}

export default {
    fetchGoods,
    getGood,
    getGoodsForCategory,
    addGood,
    updateGood,
    deleteGood,
    searchGoods
};
