import { createStore } from "vuex";

export default createStore({
  // 전역 변수 설정 -> state의 변수의 값을 변경하려면 mutations에서 바꿔줘야 함.
  // vue에서 data() 와 비슷
  state: {
    title: "",
    subTitle: "",
    category: "",
  },
  // 복잡한 연산을 할때 사용, vue에서는 computed와 비슷하다.
  getters: {},
  // actions에서 받아온 매개변수를 초기화 해주는 것.
  // vue 에서 함수 역할을 함.
  mutations: {
    // setTitle(state, payload) {
    setMutationsTitle(state, newTitleVal) {
      state.title = newTitleVal;
    },
    setMutationsSubTitle(state, newSubTitleVal) {
      state.subTitle = newSubTitleVal;
    },
    setMutationsCategory(state, newCategoryVal) {
      state.category = newCategoryVal;
    },
  },
  // mutations 호출 ex) ajax와 비슷
  actions: {
    // setTitle({ commit }, title) {
    // commit("setTitle", newTitleVal);
    setActionsTitle({ commit }, newTitleVal) {
      commit("setMutationsTitle", newTitleVal);
    },
    // setSubTitle({ commit }, subTitle) {
    setActionsSubTitle({ commit }, newSubTitleVal) {
      // commit("setSubTitle", newSubTitle);
      commit("setMutationsSubTitle", newSubTitleVal);
    },
    // setCategory({ commit }, category) {
    setActionsCategory({ commit }, newCategoryVal) {
      // commit("setCategory", category);
      commit("setMutationsCategory", newCategoryVal);
    },
  },
});
