<template>
  <div id="capture" class="preview">
    <ul class="components" id="comp__opt1">
      <li class="render title" :style="{ textShadow: shadowValue }">
        {{ title === "" ? "제목을 입력하세요." : title }}
      </li>
      <li class="render subtitle">
        {{ subTitle === "" ? "부제목을 입력하세요." : subTitle }}
      </li>
      <li class="render category">
        {{ category === "" ? "분류를 입력하세요." : category }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PreviewDiv",
  data() {
    return {
      shadowValue: "",
    };
  },
  props: ["isShadow"],
  computed: {
    ...mapState(["title", "subTitle", "category"]),
  },
  watch: {
    isShadow() {
      this.shadowValue = !this.shadowValue ? "4px 4px 8px rgba(0,0,0,1.4)" : "";
    },
  },
};
</script>

<style>
@import "../../../assets/css/thumbnail/layouts/previewDiv.css";
</style>
