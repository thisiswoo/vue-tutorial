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
    setSubTitle(state, payload) {
      state.subTitle = payload;
    },
    setCategory(state, payload) {
      state.category = payload;
    },
  },
  //
  actions: {
    setTitle({ commit }, title) {
      commit("setTitle", title);
    },
    setSubTitle({ commit }, subTitle) {
      commit("setSubTitle", subTitle);
    },
    setCategory({ commit }, category) {
      commit("setCategory", category);
    },
  },
});
