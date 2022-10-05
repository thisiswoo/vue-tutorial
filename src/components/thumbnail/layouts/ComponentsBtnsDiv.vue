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

/* .btn {
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
  background-color: #3b45ff;
  color: #fff;
} */
</style>
