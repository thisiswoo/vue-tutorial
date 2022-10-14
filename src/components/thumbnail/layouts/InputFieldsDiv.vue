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
.inputFields::after {
  clear: both;
  content: "";
  display: table;
}
input.input__field {
  width: 248px;
  height: 40px;
  float: left;
  margin-right: 12px;
  border: 1px solid #cacaca;
  border-radius: 14px;
  color: #555;
  font-size: 16px;
  font-weight: 400;
  padding-left: 14px;
}
.input__field:focus {
  background-color: #6667ab;
  color: #fff;
  outline: none;
}
.input__field:focus::placeholder {
  color: #a9adfdc0;
}
input.input__field::placeholder {
  color: #a7a7a7;
}
.input__field:last-child {
  margin-right: 0;
}
/* .inputFields {
  display: none;
} */
</style>
