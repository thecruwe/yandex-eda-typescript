import * as types from './mutations-types';
import {TCategory, TStateCategory} from "@/store/modules/categories/types";

const mutations = {
  [types.ADD_CATEGORIES](state: TStateCategory, categories: TCategory[]) {
      state.categories = categories
  }
};

export default mutations;