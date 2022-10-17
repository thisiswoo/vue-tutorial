import { createStore } from "vuex";

export default createStore({
  // 전역 변수 설정 -> state의 변수의 값을 변경하려면 mutations에서 바꿔줘야 함.
  // vue에서 data() 와 비슷
  state: {
    title: "",
    subTitle: "",
    category: "",
    rgb: "",
  },
  // 복잡한 연산을 할때 사용, vue에서는 computed와 비슷하다.
  getters: {
    // BackgroundBtnsDiv 에서 사용할 랜덤 그라디언트
    // randomGradient(state) {
    //   let rgb = state.rgb;
    //   rgb += (Math.floor(Math.random() * 90 + 1) + 150)
    //     .toString(16)
    //     .padStart(2, "0");
    //   rgb += (Math.floor(Math.random() * 90 + 1) + 150)
    //     .toString(16)
    //     .padStart(2, "0");
    //   rgb += (Math.floor(Math.random() * 90 + 1) + 150)
    //     .toString(16)
    //     .padStart(2, "0");
    //   return rgb;
    // },
  },
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
    setMutationsRandomGradient(state) {
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
    // setChangeGradient() {
    //   const rgb1 = randomRGB();
    //   const rgb2 = randomRGB();

    //   [...backgroundBtns].forEach((e) => {
    //     e.classList.remove('selected');
    //   });
    //   randomGradientBtn.classList.add('selected');

    //   domBody.style.background = `linear-gradient(to bottom, #${rgb1}, #${rgb2})`;
    //   preview.style.background = `linear-gradient(to bottom, #${rgb1}, #${rgb2})`;
    // },
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
    // setActionsRandomGradient({ commit }, newRndGrdVal) {
    //   commit("setMutationsRandomGradient", newRndGrdVal);
    // },
  },
});
