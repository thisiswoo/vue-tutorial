<template>
  <section class="wrapper">
    <article class="contents">
      <HeaderDiv />
      <PreviewDiv
        :title="title"
        :subTitle="subTitle"
        :category="category"
        :isShadow="isShadow"
      />
      <div class="control__panel">
        <InputFieldsDiv />
        <BackgroundBtnsDiv />
        <ComponentsBtnsDiv />
        <TextStyleDiv @toggleShadow="toggleShadow" />
        <MasterPanelDiv />
      </div>
    </article>
    <FooterDiv />
  </section>
  <CaptureModalSec />
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

import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState(["title", "subTitle", "category"]),
  },
  data() {
    return {
      isShadow: false,
    };
  },
  methods: {
    toggleShadow() {
      this.isShadow = !this.isShadow;
    },
  },
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
@import "../assets/css/thumbnail/thumbnailView.css";
</style>
