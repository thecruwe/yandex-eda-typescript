import axios from "axios";

export const actions = {
    fetchCategories: ({ commit }) => {
        axios.get(
            `https://fakestoreapi.com/products/categories`
        )
        .then((response) => {
            if (!response?.data) return; 
            commit('ADD_CATEGORIES', response.data);
        })
    }
};
