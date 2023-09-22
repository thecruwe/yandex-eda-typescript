import axios from "axios";
export var actions = {
    //@ts-ignore
    fetchCategories: function (_a) {
        var commit = _a.commit;
        axios.get("https://fakestoreapi.com/products/categories")
            .then(function (response) {
            if (!(response === null || response === void 0 ? void 0 : response.data))
                return;
            commit('ADD_CATEGORIES', response.data);
        });
    }
};
//# sourceMappingURL=actions.js.map