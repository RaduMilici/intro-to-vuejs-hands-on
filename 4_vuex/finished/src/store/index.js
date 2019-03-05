import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    increment({ commit }) {
      commit('increment')
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  getters: {
    getCount({ count }) {
      return count;
    }
  },
  state: {
    count: 0
  }
});
