<template>
  <div class="components__btns">
    <span class="components__txt">썸네일 구성 요소</span>
    <div :ref="refContainer" id="component__btn__container" class="btns">
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
  name: "ComponentsBtnDiv",
  data() {
    return {
      componentsBtns: null,
      // composition: null,
    };
  },
  methods: {
    refContainer(e) {
      // this.componentsBtns = e.children;
      this.componentsBtns = e;
    },
    prevTitleFunc(e) {
      console.log("e : ", e);
      document.querySelector(".components").id = e.target.dataset.set;

      for (let i = 0; i < this.componentsBtns.children.length; i++) {
        this.componentsBtns.children[i].classList.remove("selected");
      }
      e.target.classList.add("selected");
    },
  },
  beforeUpdate() {
    this.componentsBtns = null;
    console.log("1");
  },
};
</script>

<style>
@import "../../../assets/css/thumbnail/layouts/componentsBtnsDiv.css";
</style>
