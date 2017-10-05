import goods from '../../public/goods.json';

function fetchGoods() {
    return Promise.resolve(goods);
};

function searchGoods(value){
    return Promise.resolve(value);
}

export default { fetchGoods, searchGoods };
