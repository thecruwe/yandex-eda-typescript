export const categoriesWithProducts = (state, getters, rootState) => {
    const categories = [];
    const products = rootState.products.products;
    state.categories.forEach(categoryName => {
        const category = {
            name: categoryName,
            products: [],
        };
        products.forEach(product => {
            if (product.category === categoryName) {
                category.products.push(product.id)
            }
        });
        categories.push(category);
    });
    return categories;
};