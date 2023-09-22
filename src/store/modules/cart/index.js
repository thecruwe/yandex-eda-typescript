import { initialState } from './state';
import * as getters from './getters';
import mutations from './mutations';
export default {
    namespaced: true,
    state: initialState(),
    getters: getters,
    mutations: mutations,
};
//# sourceMappingURL=index.js.map