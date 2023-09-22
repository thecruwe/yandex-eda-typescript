import axios from "axios";
import {TCategory} from "@/store/modules/categories/types";

export const actions = {
    //@ts-ignore
    fetchCategories: ({ commit }) => {
        axios.get(
            `https://fakestoreapi.com/products/categories`
        )
        .then((response) => {
            if (!response?.data) return; 
            commit('ADD_CATEGORIES', response.data as TCategory[]);
        })
    }
};
