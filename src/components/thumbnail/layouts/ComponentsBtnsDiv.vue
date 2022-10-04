<template>
  <div class="components__btns">
    <span class="components__txt">썸네일 구성 요소</span>
    <div id="component__btn__container" class="btns">
      <button data-set="comp__opt1" class="btn component__opt selected">
        제목 / 부제목 / 분류
      </button>
      <button data-set="comp__opt2" class="btn component__opt">
        제목 / 분류
      </button>
      <button data-set="comp__opt3" class="btn component__opt">제목만</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.components__btns {
  height: 70px;
  line-height: 68px;
  border-bottom: 1px solid #cacaca;
}
.components__txt {
  color: #666666;
  font-weight: 500;
}
.btns {
  float: right;
}
</style>
