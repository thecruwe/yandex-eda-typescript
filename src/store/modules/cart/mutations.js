var _a;
import * as types from './mutations-types';
var mutations = (_a = {},
    _a[types.ADD_TO_CART] = function (state, productID) {
        var product = state.cart.find(function (product) { return product.id === productID; });
        if (product) {
            product.quantity++;
        }
        else {
            var quantity = 1;
            var productInCart = { id: productID, quantity: quantity };
            state.cart.push(productInCart);
        }
    },
    _a[types.REMOVE_FROM_CART] = function (state) {
        state.cart = [];
    },
    _a[types.REMOVE_PRODUCT_ONE_FROM_CART] = function (state, productID) {
        var product = state.cart.find(function (product) { return product.id === productID; });
        if (!product)
            return;
        if (product.quantity === 1) {
            state.cart = state.cart.filter(function (product) { return product.id !== productID; });
        }
        else {
            product.quantity--;
        }
    },
    _a);
export default mutations;
//# sourceMappingURL=mutations.js.map