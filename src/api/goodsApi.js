import goods from '../../public/goods.json';

function fetchGoods() {
  
    return new Promise((resolve) => {
     setTimeout(() => {
       resolve(goods);
     }, 3000);
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

function updateGood(good){
    
    return Promise.resolve(good);
}

function deleteGood(good){

    return Promise.resolve(good);
}

function searchGoods(value) {
    return Promise.resolve(value);
}

export default {
    fetchGoods,
    addGood,
    updateGood,
    deleteGood,
    searchGoods
};
