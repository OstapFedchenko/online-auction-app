import goods from '../../public/goods.json';



function fetchGoods() {
    console.log('method');
    return function(dispatch){
        console.log('method2');
        setTimeout(() => dispatch({type: 'GOODS::FETCH_SUCCEEDED', payload: goods}));
    }()
};

export default { fetchGoods };
