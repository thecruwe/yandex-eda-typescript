import { __assign } from "tslib";
export var cart = function (state) { return state.cart; };
export var productsInCart = function (state) {
    return state.cart.reduce(function (result, _a) {
        var _b;
        var id = _a.id, quantity = _a.quantity;
        return (__assign(__assign({}, result), (_b = {}, _b[id] = quantity, _b)));
    }, {});
};
export var totalPriceInCart = function (state, getters, rootState, rootGetters) {
    var products = rootGetters["products/productsWithID"];
    return state.cart.reduce(function (accumulator, _a) {
        var id = _a.id, quantity = _a.quantity;
        return accumulator + products[id].price * quantity;
    }, 0);
};
//# sourceMappingURL=getters.js.map