import { createStore } from "vuex";

export default createStore({
  // ** state(상태) **
  // 글로벌로 관리될 상태 값
  state: {
    // 글로벌로 관리될 상태 값
    title: "",
    subTitle: "",
    category: "",
    rgb: "",
    rgb1: "",
    rgb2: "",
  },

  // ** getters(변환) **
  // 밖으로 내보낼 값들(실제 컴포넌트에서 가져가 사용할 값들).
  // this.$store.getters['경로명/함수명']; 을 사용해야 한다.
  getters: {},

  // ** mutations(변이) **
  // state의 동기적 변이를 담당, Vuex저장소에서 state를 변경할 수 있는 유일한 방법
  // 일반적으로 직접호출할 수 없으며. Action에서 commit('함수명', '전달인자')통해서만 실행 할 수 있다.
  mutations: {
    // 실제 데이터 변화가 일어나는 곳

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
    setMutationsRandomRGB(state) {
      state.rgb = "";
      state.rgb += (Math.floor(Math.random() * 90 + 1) + 150)
        .toString(16)
        .padStart(2, "0");
      state.rgb += (Math.floor(Math.random() * 90 + 1) + 150)
        .toString(16)
        .padStart(2, "0");
      state.rgb += (Math.floor(Math.random() * 90 + 1) + 150)
        .toString(16)
        .padStart(2, "0");
    },
  },
  // mutations 호출 ex) ajax와 비슷
  // ** actions(액션)**
  // 비동기적 작업이 포함되어 있으며, mutations에 commit을 한다.
  // dispatch('함수명', '전달인자')를 통해서 실행시킬 수 있다.
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
