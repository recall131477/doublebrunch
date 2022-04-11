import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      isLoading: false,
    };
  },
  mutations: {
    CHANGE_LOADING(state, value) {
      state.isLoading = value;
    },
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
  },
});
