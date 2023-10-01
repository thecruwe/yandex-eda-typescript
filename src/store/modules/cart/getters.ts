import {TStateCart} from "@/store/modules/cart/types";

export const cart = (state: TStateCart) => state.cart;
export const productsInCart = (state: TStateCart) => {
    return state.cart.reduce((result, {id, quantity}) =>
        ({
            ...result,
            [id]: quantity,
        }), {})
};
export const totalPriceInCart = (state: TStateCart, getters: any, rootState: any, rootGetters: any) => {
    const products = rootGetters["products/productsWithID"];
    return state.cart.reduce((accumulator, {id, quantity}) => accumulator + products[id].price.toFixed(0) * quantity, 0);
};
