import axios from "axios";
import * as types from './mutations-types';
export var actions = {
    //@ts-ignore
    fetchProducts: function (_a) {
        var commit = _a.commit;
        axios.get("https://fakestoreapi.com/products?limit=15")
            .then(function (response) {
            if (!(response === null || response === void 0 ? void 0 : response.data))
                return;
            commit(types.ADD_PRODUCTS, response.data);
        });
    },
};
//# sourceMappingURL=actions.js.map