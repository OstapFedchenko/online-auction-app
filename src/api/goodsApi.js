import goods from '../../public/goods.json';

function fetchGoods() {
    return Promise.resolve(goods);
};

export default { fetchGoods };
