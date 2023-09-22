import * as types from './mutations-types';
import {TProduct, TStateProduct} from "@/store/modules/products/types";

const mutations = {
    [types.ADD_PRODUCTS](state: TStateProduct, products: TProduct[]) {
      state.products = products;
    }
};

export default mutations;