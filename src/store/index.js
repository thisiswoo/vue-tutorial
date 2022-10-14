import { createStore } from "vuex";

export default createStore({
  // 전역 변수 설정
  state: {
    title: "",
    subTitle: "",
    category: "",
  },
  getters: {},
  //
  mutations: {
    setTitle(state, payload) {
      state.title = payload;
    },
  },
  //
  actions: {
    setTitle({ commit }, title) {
      commit("setTitle", title);
    },
  },
  modules: {},
});
