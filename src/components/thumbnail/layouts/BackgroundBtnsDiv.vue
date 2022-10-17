<template>
  <div class="background__btns">
    <span class="background__txt">배경을 정해주세요</span>
    <div id="background__btn__container" class="btns">
      <button class="btn random__gradient bgb" @click="randomGradient">
        랜덤 그라디언트
      </button>
      <button class="btn random__solid bgb">랜덤 단색</button>
      <button class="btn img__url bgb">이미지 URL</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

const domBody = document.body;
const preview = document.querySelector(".preview");
const randomGradientBtn = document.querySelector(".random__gradient");
const backgroundBtns = document.querySelector(
  "#background__btn__container"
).children;

export default {
  data() {
    return {
      // 초기화 시켜주기
      randomGradient1: "",
      randomGradient2: "",
    };
  },
  methods: {
    // 봉석씨에게 물어보기.
    // ...mapMutations(["setMutationsRandomGradient"]),
    ...mapMutations({ randomGrd: "setMutationsRandomGradient" }),
    randomGradient() {
      this.rgb1 = this.randomGrd();
      this.randomGradient1 = this.$store.state.rgb;
      console.log("this.randomGradient1 > ", this.randomGradient1);
      this.rgb2 = this.randomGrd();
      this.randomGradient2 = this.$store.state.rgb;
      console.log("this.randomGradient2 > ", this.randomGradient2);

      this.changeGradient();
    },
    changeGradient() {
      this.rgb1 = this.randomGrd();
      this.rgb2 = this.randomGrd();

      console.log("this.rgb1 > ", this.rgb1);
      console.log("this.rgb2 > ", this.rgb2);

      // [...backgroundBtns].forEach((e) => {
      //   e.classList.remove("selected");
      // });
      // backgroundBtns.forEach((e) => {
      //   e.classList.remove("selected");
      // });
      for (let i = 0; i < backgroundBtns.length; i++) {
        backgroundBtns[i].classList.remove("selected");
      }
      randomGradientBtn.classList.add("selected");

      domBody.style.background = `linear-gradient(to bottom, #${this.rgb1}, #${this.rgb2})`;
      preview.style.background = `linear-gradient(to bottom, #${this.rgb1}, #${this.rgb2})`;
    },
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
@import "../../../assets/css/layouts/backgroundBtnDiv.css";
</style>
