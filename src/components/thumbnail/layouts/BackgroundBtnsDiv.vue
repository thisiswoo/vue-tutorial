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
      <button :ref="refImgUrlBtn" class="btn img__url bgb" @click="getImgUrl">
        이미지 URL
      </button>
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
      domBody: document.body,
      preview: null,
      randomSolidVal: "",
      imgUrlVal: "",
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
    getImgUrl() {
      this.preview = document.querySelector(".preview");
      const regex =
        /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\\+\\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\\+\\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\\+~%\\/.\w-_]*)?\??(?:[-\\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
      let imgUrl = prompt("이미지 주소를 입력하세요 😇");
      if (imgUrl == null) return; //취소 눌렀을 때 알림이 발생하지 않도록 수정
      if (!imgUrl.match(regex)) {
        //match : 문자열이 정규식과 매치되는 부분을 검색
        alert("올바르지 않은 URL입니다 😨");
        return;
      }
      this.domBody.style.background =
        this.preview.style.background = `url('${imgUrl}')`;
      this.domBody.style.backgroundSize = this.preview.style.backgroundSize =
        "cover"; //cover : 배경을 사용하는 요소를 다 채울 수 있게 이미지를 확대 또는 축소한다 가로 세로 비율을 유지한다
      this.domBody.style.backgroundRepeat =
        this.preview.style.backgroundRepeat = "no-repeat"; // background-repeat : 배경 이미지의 반복 여부와 반복 방향을 정한다 no-repeat : 반복하지 않는다
      this.domBody.style.backgroundPosition =
        this.preview.style.backgroundPosition = "center"; // background-Position : 배경 이미지의 위치를 정하는 속성
    },
    refImgUrlBtn(e) {
      this.imgUrlVal = e;
    },
  },
  computed: {},
};
</script>

<style>
@import "../../../assets/css/thumbnail/layouts/backgroundBtnDiv.css";
</style>
