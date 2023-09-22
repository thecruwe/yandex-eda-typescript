import axios from "axios";
import * as types from './mutations-types';
import {TProduct} from "@/store/modules/products/types";

export const actions = {
    //@ts-ignore
    fetchProducts: ({commit}) => {
        axios.get(
            `https://fakestoreapi.com/products?limit=15`
        )
        .then((response) => {
            if (!response?.data) return;
            commit(types.ADD_PRODUCTS, response.data as TProduct[])
        })
    },
}