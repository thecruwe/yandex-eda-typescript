import { createStore } from 'vuex';
import modules from './modules';
var storeInstance = createStore({
    modules: modules,
    devtools: true,
});
export default storeInstance;
//# sourceMappingURL=index.js.map