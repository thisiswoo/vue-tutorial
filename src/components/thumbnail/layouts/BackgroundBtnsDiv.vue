<template>
  <div class="background__btns">
    <span class="background__txt">배경을 정해주세요</span>
    <div id="background__btn__container" class="btns">
      <button class="btn random__gradient" @click="randomGradient">
        랜덤 그라디언트
      </button>
      <button class="btn random__solid">랜덤 단색</button>
      <button class="btn img__url">이미지 URL</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

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
      this.randomGrd();
      this.randomGradient1 = this.$store.state.rgb;
      console.log("this.randomGradient1 > ", this.randomGradient1);
      this.randomGrd();
      this.randomGradient2 = this.$store.state.rgb;
      console.log("this.randomGradient2 > ", this.randomGradient2);
    },
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
