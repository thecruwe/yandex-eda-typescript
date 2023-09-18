export const cart = (state) => state.cart;
export const productsInCart = (state) => {
    return state.cart.reduce((result, {id, quantity}) =>
        ({
            ...result,
            [id]: quantity,
    }), {})
};
export const totalPriceInCart = (state, getters, rootState, rootGetters) => {
    const products = rootGetters["products/productsWithID"];
    return state.cart.reduce((accumulator, {id, quantity}) => accumulator + products[id].price * quantity, 0);
};
