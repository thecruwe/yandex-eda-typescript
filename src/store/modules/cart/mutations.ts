import * as types from './mutations-types';
import {TCartProduct, TStateCart} from "@/store/modules/cart/types";

const mutations = {
    [types.ADD_PRODUCT_TO_CART](state: TStateCart, productID: number) {
        const product: TCartProduct | undefined = state.cart.find((product: TCartProduct) => product.id === productID);
        if (product) {
            product.quantity++;
        } else {
            const quantity = 1;
            const productInCart = {id: productID, quantity}
            state.cart.push(productInCart)
        }
      },
      [types.REMOVE_FROM_CART](state: TStateCart) {
        state.cart = [];
      },
    [types.REMOVE_PRODUCT_ONE_FROM_CART](state: TStateCart, productID: number) {
        const product: TCartProduct | undefined = state.cart.find((product: TCartProduct):boolean => product.id === productID )
        if (!product) return;
        if (product.quantity === 1 ) {
            state.cart = state.cart.filter((product: TCartProduct):boolean => product.id !== productID);
        } else {
            product.quantity--;
        }
    }
}

export default mutations;