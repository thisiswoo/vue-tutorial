<template>
  <div class="inputFields">
    <input
      class="input__field input__title"
      data-set="title"
      type="text"
      spellcheck="false"
      placeholder="제목을 입력하세요"
      v-model="titleValue"
    />
    <input
      class="input__field input__subtitle"
      data-set="subtitle"
      type="text"
      spellcheck="false"
      placeholder="부제목을 입력하세요"
      v-model="subTitleValue"
    />
    <input
      class="input__field input__category"
      data-set="category"
      type="text"
      spellcheck="false"
      placeholder="분류를 입력하세요"
      v-model="categoryValue"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      titleValue: "",
      subTitleValue: "",
      categoryValue: "",
    };
  },
  methods: {
    ...mapActions(["setTitle", "setSubTitle", "setCategory"]),
  },
  watch: {
    titleValue(newVal, oldVal) {
      this.setTitle(newVal);
      console.log("title --------> newVal : ", newVal, " oldVal : ", oldVal);
    },
    subTitleValue(newVal, oldVal) {
      this.setSubTitle(newVal);
      console.log("subTitle --------> newVal : ", newVal, " oldVal : ", oldVal);
    },
    categoryValue(newVal, oldVal) {
      this.setCategory(newVal);
      console.log("category --------> newVal : ", newVal, " oldVal : ", oldVal);
    },
  },
};
</script>

<style>
@import "../../../assets/css/layouts/inputFieldsDiv.css";
</style>
