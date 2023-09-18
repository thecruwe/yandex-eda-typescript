import { initialState } from './state'
import * as getters from './getters'
import mutations from './mutations'
import { actions } from './actions'

export default {
    namespaced: true,
    state: initialState(),
    actions,
    getters,
    mutations,
};