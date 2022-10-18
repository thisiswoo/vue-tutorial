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
      <button
        :ref="refRandomSolidBtn"
        class="btn random__solid bgb"
        @click="randomSolid"
      >
        랜덤 단색
      </button>
      <button class="btn img__url bgb">이미지 URL</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

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
      randomSolidVal: "",
    };
  },
  methods: {
    ...mapMutations({ rndRGB: "setMutationsRandomRGB" }),
    randomRGB() {
      this.rndRGB();
      this.randomRgb1 = this.$store.state.rgb;
      this.rndRGB();
      this.randomRgb2 = this.$store.state.rgb;

      this.preview = document.querySelector(".preview");
      this.preview.style.background = `linear-gradient(to bottom, #${this.randomRgb1}, #${this.randomRgb2})`;
      this.domBody.style.background = `linear-gradient(to bottom, #${this.randomRgb1}, #${this.randomRgb2})`;
    },
    refContainer(e) {
      this.refContainerVal = e;
    },
    refRandomRgbBtn(e) {
      this.refRandomRgbVal = e;
    },
    randomSolid() {
      this.rndRGB();
      this.randomSolidRgb = this.$store.state.rgb;

      this.preview = document.querySelector(".preview");
      this.preview.style.background = `linear-gradient(to bottom, #${this.randomSolidRgb}, #${this.randomSolidRgb})`;
      this.domBody.style.background = `linear-gradient(to bottom, #${this.randomSolidRgb}, #${this.randomSolidRgb})`;
    },
    refRandomSolidBtn(e) {
      this.randomSolidVal = e;
    },
  },
  computed: {},
};
</script>

<style>
@import "../../../assets/css/thumbnail/layouts/backgroundBtnDiv.css";
</style>
