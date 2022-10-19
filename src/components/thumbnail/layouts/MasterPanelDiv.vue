<template>
  <div class="master__panel">
    <button class="btn" id="initialize" @click="initBtn">초기화</button>
    <button class="btn" id="export" @click="produceImageBtn">
      완료 및 이미지화
    </button>
  </div>
</template>

<script>
import html2canvas from "html2canvas";

export default {
  name: "MasterPanelDiv",
  data() {
    return {
      domBody: document.body,
    };
  },
  mounted() {
    this.initBtn();
  },
  methods: {
    initBtn() {
      const preview = document.querySelector(".preview");
      const prevTitle = document.querySelector(".title");
      const prevSubtitle = document.querySelector(".subtitle");
      const prevCategory = document.querySelector(".category");
      const allBtns = document.querySelectorAll(".btn");
      const inputFields = document.querySelectorAll(".input__field");
      const renderTxt = document.querySelectorAll(".render");
      const componentsBtns = document.querySelectorAll(".component__opt");
      //preview, body 초기화
      this.domBody.style.background = "#f4f4f4";
      // "url(https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80) center center / cover no-repeat";
      preview.style.background = "#6667ab";
      // "url(https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80) center center / cover no-repeat";
      // this.domBody.style.backgroundColor = preview.style.backgroundColor =
      //   "#6667ab";
      // this.domBody.style.backgroundColor = preview.style.backgroundColor =
      //   "#f4f4f4";
      prevTitle.textContent = "제목을 입력하세요";
      prevSubtitle.textContent = "부제목을 입력하세요";
      prevCategory.textContent = "분류를 입력하세요";
      //버튼 selected 속성 초기화
      allBtns.forEach((e) => {
        e.classList.remove("selected");
      });
      //input 값 초기화
      inputFields.forEach((e) => {
        e.value = "";
      });
      //텍스트 스타일 초기화
      renderTxt.forEach((e) => {
        e.style.textShadow = "";
        e.style.color = "#ffffff";
      });
      prevSubtitle.style.borderTop = "1px solid #ffffff";
      prevTitle.style.fontSize = "54px";
      prevSubtitle.style.fontSize = "24px";
      prevCategory.style.fontSize = "24px";
      //썸네일 구성 요소 초기화
      componentsBtns[0].classList.add("selected");
      inputFields[0].focus();
      document.querySelector(".components").id = "comp__opt1";
    },
    produceImageBtn() {
      const captureModal = document.querySelector(".capture_modal");
      const mod = document.querySelectorAll(".mod");
      html2canvas(document.querySelector("#capture"), {
        logging: true, //디버그 목적으로 로깅 활성화
        letterRendering: 1,
        allowTaint: true, //교차 출처 이미지가 캔버스를 오염시키는 것을 허용할지 여부
        useCORS: true, //CORS를 사용하여 서버에서 이미지 로드 시도 여부
      }).then((canvas) => {
        captureModal.appendChild(canvas).classList.add("canvas"); //appendChild : 선택한 요소 안에 자식요소를 추가한다.
        console.log("canvas : ", canvas);
      });
      mod.forEach((e) => e.classList.remove("hidden"));
    },
  },
};
</script>

<style>
@import "../../../assets/css/thumbnail/layouts/masterPanelDiv.css";
</style>
