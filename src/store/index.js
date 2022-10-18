import { createStore } from "vuex";

export default createStore({
  // ** state(상태) **
  // 전역 변수 설정 -> state의 변수의 값을 변경하려면 mutations에서 바꿔줘야 함.
  // vue에서 data() 와 비슷
  // 공통으로 사용할 변수를 정의한다.
  // 컴포넌트 간 동일한 Data를 사용할 수 있다.
  state: {
    title: "",
    subTitle: "",
    category: "",
    rgb: "",
  },

  // 복잡한 연산을 할때 사용, vue에서는 computed와 비슷하다.
  // ** getters(변환) **
  // state를 computed와 같이 이용할 수 있게 도움을 주는 함수.
  // 각 컴포넌트의 공통 사용 정의. 여러 컴포넌트에서 동일한 component가 사용 될 경우 getters에 정의하여 공통으로 사용 가능.
  // this.$store.getters['경로명/함수명']; 을 사용해야 한다.
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

  // ** mutations(변이) **
  // actions에서 받아온 매개변수를 초기화 해주는 것.
  // vue 에서 함수 역할을 함.
  // state의 동기적 변이를 담당, Vuex저장소에서 state를 변경할 수 있는 유일한 방법
  // 일반적으로 직접호출할 수 없으며. Action에서 commit('함수명', '전달인자')통해서만 실행 할 수 있다.
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
    // setActionsRandomGradient({ commit }, newRndGrdVal) {
    //   commit("setMutationsRandomGradient", newRndGrdVal);
    // },
  },
});
