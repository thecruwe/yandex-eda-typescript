export var categoriesWithProducts = function (state, getters, rootState) {
    var categories = [];
    var products = rootState.products.products;
    state.categories.forEach(function (categoryName) {
        var category = {
            name: categoryName,
            products: [],
        };
        products.forEach(function (product) {
            if (product.category === categoryName) {
                category.products.push(product.id);
            }
        });
        categories.push(category);
    });
    return categories;
};
//# sourceMappingURL=getters.js.map