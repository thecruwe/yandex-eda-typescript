import * as types from './mutations-types';

const mutations = {
    [types.ADD_PRODUCTS](state, products) {
      state.products = products;
      state.products.forEach((product) => {
          product.quantity = state.quantity;
          product.productPrice = state.productPrice;
          product.productPrice = product.price;
      });
    }
};


export default mutations;