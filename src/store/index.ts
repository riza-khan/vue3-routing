import { createStore } from "vuex";

const modules = {};

export default createStore({
  state: {
    user: {},
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {},
  modules: {
    ...modules,
  },
});
