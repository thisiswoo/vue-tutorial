<template>
  <div class="first-div">
    <section class="wrapper">
      <article class="contents">
        <HeaderDiv />
        <PreviewDiv />
        <div class="control__panel">
          <InputFieldsDiv />
          <BackgroundBtnsDiv />
          <ComponentsBtnsDiv />
          <TextStyleDiv />
          <MasterPanelDiv />
        </div>
      </article>
      <FooterDiv />
    </section>
    <CaptureModalSec />
  </div>
</template>

<script>
// import html2canvas from "html2canvas";

import HeaderDiv from "../components/thumbnail/layouts/HeaderDiv.vue";
import PreviewDiv from "../components/thumbnail/layouts/PreviewDiv.vue";
import InputFieldsDiv from "../components/thumbnail/layouts/InputFieldsDiv.vue";
import BackgroundBtnsDiv from "../components/thumbnail/layouts/BackgroundBtnsDiv.vue";
import ComponentsBtnsDiv from "../components/thumbnail/layouts/ComponentsBtnsDiv.vue";
import TextStyleDiv from "../components/thumbnail/layouts/TextStyleDiv.vue";
import MasterPanelDiv from "../components/thumbnail/layouts/MasterPanelDiv.vue";
import FooterDiv from "../components/thumbnail/layouts/FooterDiv.vue";
import CaptureModalSec from "../components/thumbnail/layouts/CaptureModalSec.vue";

export default {
  name: "App",
  components: {
    HeaderDiv,
    PreviewDiv,
    InputFieldsDiv,
    BackgroundBtnsDiv,
    ComponentsBtnsDiv,
    TextStyleDiv,
    MasterPanelDiv,
    FooterDiv,
    CaptureModalSec,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.first-div {
  position: relative;
  background: #f4f4f4;
  height: 100vh;
  min-height: 1220px;
}
.first-div::after {
  position: fixed;
  content: "";
  top: 0;
  left: 0;
  display: block;
  height: 100%;
  widows: 100%;
  z-index: -100;
  backdrop-filter: blur(100px);
}
section.wrapper {
  margin: 0 auto;
  width: 1024px;
  height: 1150px;
  background-color: #fff;
  box-shadow: 0 0 20px rgb(0 0 0 / 20%);
}
article.contents {
  position: relative;
  margin: 0 auto;
  width: 768px;
}
.control__panel {
  margin: 35px 0 50px 0;
  padding-bottom: 50px;
  /* display: none; */
}

.btn {
  width: 192px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: #f4f4f4;
  color: #666666;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, opacity 0.4s ease,
    transform 0.4s ease;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(1.05);
  opacity: 0.2;
}
.btn:hover {
  background-color: #6667ab;
  color: #fff;
}
</style>
