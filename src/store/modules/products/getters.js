import { __assign } from "tslib";
export var products = function (state) { return state.products; };
export var productsWithID = function (rootGetters, state) {
    return state.products.reduce(function (result, product) {
        var _a;
        return __assign(__assign({}, result), (_a = {}, _a[product.id] = product, _a));
    }, {});
};
//# sourceMappingURL=getters.js.map