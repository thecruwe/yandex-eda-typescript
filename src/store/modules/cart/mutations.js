import * as types from './mutations-types';

const mutations = {
    [types.ADD_TO_CART](state, elementID) {
        const product = state.cart.find((product) => product.id === elementID);
        if (product) {
            product.quantity++;
        } else {
            const quantity = 1;
            const productInCart = {id: elementID, quantity}
            state.cart.push(productInCart)
        }
      },
      [types.REMOVE_FROM_CART](state) {
        state.cart = [];
      },
    [types.REMOVE_PRODUCT_ONE_FROM_CART](state, elementID) {
        const product = state.cart.find((product) => product.id === elementID )
        if (product.quantity === 1 ) {
            state.cart = state.cart.filter((product) => product.id !== elementID);
        } else {
            product.quantity--;
        }
    }
}

export default mutations;