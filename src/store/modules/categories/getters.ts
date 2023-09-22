import {TProduct} from "@/store/modules/products/types";
import {TCategory, TCategoryWithProducts, TStateCategory} from "@/store/modules/categories/types";

export const categoriesWithProducts = (state: TStateCategory, getters: any, rootState: any): TCategoryWithProducts[] => {
    const categories: TCategoryWithProducts[] = [];
    const products = rootState.products.products;
    state.categories.forEach((categoryName: TCategory) => {
        const category: TCategoryWithProducts = {
            name: categoryName,
            products: [],
        };
        products.forEach((product:TProduct) => {
            if (product.category === categoryName) {
                category.products.push(product.id)
            }
        });
        categories.push(category);
    });
    return categories;
};