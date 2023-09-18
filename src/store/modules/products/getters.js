export const products = ( state ) => state.products;
export const productsWithID = (rootGetters, state) => {
    return state.obj = state.products.reduce(function(result, product) {
        return {
            ...result,
           [product.id]: product,
        }
}, {})
};
// (убрать storeInstance). (передавать в product с помощью пропсов product.id, где с помощью геттеров брать продукт.)!(По написанной логике сделать добавление товара в корзину.)!
