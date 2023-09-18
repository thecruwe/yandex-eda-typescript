import * as types from './mutations-types';

const mutations = {
  [types.ADD_CATEGORIES](state, show) {
      state.categories = show
  },
};

export default mutations;