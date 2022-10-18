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
    // ...mapActions(["setTitle", "setSubTitle", "setCategory"]),
    // index.js에서 Actions의 함수를 호출.
    ...mapActions([
      "setActionsTitle",
      "setActionsSubTitle",
      "setActionsCategory",
    ]),
  },
  watch: {
    // titleValue(newVal, oldVal) {
    titleValue(newTitleVal, oldTitleVal) {
      // this.setTitle(newVal);
      this.setActionsTitle(newTitleVal);
      console.log(
        "title > newTitleVal : ",
        newTitleVal,
        " oldTitleVal : ",
        oldTitleVal
      );
    },
    subTitleValue(newSubTitleVal, oldSubTitleVal) {
      // this.setSubTitle(newVal);
      this.setActionsSubTitle(newSubTitleVal);
      console.log(
        "subTitle > newSubTitleVal : ",
        newSubTitleVal,
        " oldSubTitleVal : ",
        oldSubTitleVal
      );
    },
    categoryValue(newCategoryVal, oldCategoryVal) {
      // this.setCategory(newVal);
      this.setActionsCategory(newCategoryVal);
      console.log(
        "category > newCategoryVal : ",
        newCategoryVal,
        " oldCategoryVal : ",
        oldCategoryVal
      );
    },
  },
};
</script>

<style>
@import "../../../assets/css/thumbnail/layouts/inputFieldsDiv.css";
</style>
