<template>
  <div id="capture" class="preview">
    <ul class="components" id="comp__opt1">
      <li class="render title">
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
  computed: {
    ...mapState(["title", "subTitle", "category"]),
  },
};
</script>

<style>
@import "../../../assets/css/thumbnail/layouts/previewDiv.css";
</style>
