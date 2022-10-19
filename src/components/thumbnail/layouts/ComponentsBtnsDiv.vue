<template>
  <div class="components__btns">
    <span class="components__txt">썸네일 구성 요소</span>
    <div id="component__btn__container" class="btns">
      <button
        data-set="comp__opt1"
        class="btn component__opt selected"
        @click="prevTitleFunc"
      >
        제목 / 부제목 / 분류
      </button>
      <button
        data-set="comp__opt2"
        class="btn component__opt"
        @click="prevTitleFunc"
      >
        제목 / 분류
      </button>
      <button
        data-set="comp__opt3"
        class="btn component__opt"
        @click="prevTitleFunc"
      >
        제목만
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      componentsBtns: null,
      composition: null,
    };
  },
  methods: {
    prevTitleFunc() {
      this.componentsBtns = document.querySelectorAll(".component__opt");
      this.composition = document.querySelector(".components");

      this.componentsBtns.forEach((e) => {
        e.addEventListener("click", this.changeLayout);
      });
    },
    changeLayout(e) {
      const opt = e.target.dataset.set;
      let test = (document.querySelector(".components").id = opt);
      console.log("test : ", test);

      this.componentsBtns.forEach((e) => {
        e.classList.remove("selected");
      });
      e.target.classList.add("selected");
    },
  },
};
</script>

<style>
@import "../../../assets/css/thumbnail/layouts/componentsBtnsDiv.css";
</style>
