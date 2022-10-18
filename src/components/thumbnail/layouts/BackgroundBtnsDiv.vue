<template>
  <div class="background__btns">
    <span class="background__txt">배경을 정해주세요</span>
    <div :ref="refContainer" id="background__btn__container" class="btns">
      <button
        :ref="refRandomRgbBtn"
        class="btn random__gradient bgb"
        @click="randomRGB"
      >
        랜덤 그라디언트
      </button>
      <button class="btn random__solid bgb">랜덤 단색</button>
      <button class="btn img__url bgb">이미지 URL</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

// const domBody = document.body;
// const preview = document.querySelector(".preview");
// const randomGradientBtn = document.querySelector(".random__gradient");
// const backgroundBtns = document.querySelector(
//   "#background__btn__container"
// ).children;

export default {
  data() {
    return {
      // 초기화 시켜주기
      randomRgb1: "",
      randomRgb2: "",
      refContainerVal: null,
      refRandomRgbVal: null,
      rgb1: "",
      rgb2: "",
      domBody: document.body,
      preview: null,
    };
  },
  methods: {
    // 봉석씨에게 물어보기.
    // ...mapMutations(["setMutationsRandomGradient"]),
    ...mapMutations({ rndRGB: "setMutationsRandomRGB" }),
    randomRGB() {
      this.rndRGB();
      this.randomRgb1 = this.$store.state.rgb;
      console.log("this.randomGradient1 > ", this.randomRgb1);
      this.rndRGB();
      this.randomRgb2 = this.$store.state.rgb;
      console.log("this.randomGradient2 > ", this.randomRgb2);

      for (let i = 0; i < this.refContainerVal.length; i++) {
        console.log("arry ref", this.refContainerVal[i]);
        this.refContainerVal[i].classList.remove("selected");
      }
      this.refRandomRgbVal.classList.add("selected");
      console.log("this.refRandomRgbVal : ", this.refRandomRgbVal);

      this.preview = document.querySelector(".preview");
      this.preview.style.background = `linear-gradient(to bottom, #${this.randomRgb1}, #${this.randomRgb2})`;
      this.domBody.style.background = `linear-gradient(to bottom, #${this.randomRgb1}, #${this.randomRgb2})`;
    },
    refContainer(e) {
      console.log("e.children : ", e.children);
      this.refContainerVal = e.children;
      console.log("this.refContainerVal : ", this.refContainerVal);
    },
    refRandomRgbBtn(e) {
      console.log("e.randomRGB : ", e);
      this.refRandomRgbVal = e;
    },

    // changeGradient() {
    //   this.rgb1 = this.randomGrd();
    //   this.rgb2 = this.randomGrd();

    //   console.log("this.rgb1 > ", this.rgb1);
    //   console.log("this.rgb2 > ", this.rgb2);

    //   [...backgroundBtns].forEach((e) => {
    //     e.classList.remove("selected");
    //   });
    //   backgroundBtns.forEach((e) => {
    //     e.classList.remove("selected");
    //   });
    //   for (let i = 0; i < backgroundBtns.length; i++) {
    //     backgroundBtns[i].classList.remove("selected");
    //   }
    //   randomGradientBtn.classList.add("selected");

    //   this.domBody.style.background = `linear-gradient(to bottom, #${this.rgb1}, #${this.rgb2})`;
    //   this.preview.style.background = `linear-gradient(to bottom, #${this.rgb1}, #${this.rgb2})`;
    // },
    // randomGradientBtn.addEventListener('click', changeGradient);
  },
  computed: {
    // ...mapGetters(["randomGradient"]),
    // randomGradient: "getRandomGradient",
    // ...mapActions(["setActionsRandomGradient"]),
  },
  // watch: {
  //   rndGrdValue(newVal, oldVal) {
  //     this.setActionsRandomGradient(newVal);
  //     console.log("new rndGrd : ", newVal, " old rndGrd : ", oldVal);
  //   },
  // },
};
</script>

<style>
@import "../../../assets/css/thumbnail/layouts/backgroundBtnDiv.css";
</style>
