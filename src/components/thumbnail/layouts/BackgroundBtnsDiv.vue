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
export default {
  methods: {
    randomGradient() {
      let rgb = "";
      rgb += (Math.floor(Math.random() * 90 + 1) + 150)
        .toString(16)
        .padStart(2, "0");
      rgb += (Math.floor(Math.random() * 90 + 1) + 150)
        .toString(16)
        .padStart(2, "0");
      rgb += (Math.floor(Math.random() * 90 + 1) + 150)
        .toString(16)
        .padStart(2, "0");
      return rgb;
    },
  },
};
</script>

<style>
@import "../../../assets/css/layouts/backgroundBtnDiv.css";
</style>
