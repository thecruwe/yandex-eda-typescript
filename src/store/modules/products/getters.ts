import {TProduct, TProductsWithId, TStateProduct} from "@/store/modules/products/types";

export const products = ( state: TStateProduct ) => state.products;
export const productsWithID = (rootGetters: any, state: TStateProduct): TProductsWithId => {
    return state.products.reduce((result:TProductsWithId, product:TProduct) => {
        return {
            ...result,
           [product.id]: product,
        }
}, {})
};
