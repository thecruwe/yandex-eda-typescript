import {createStore} from 'vuex';
import modules from './modules';

const storeInstance = createStore({
    modules,
    devtools: true,
});

export default storeInstance;