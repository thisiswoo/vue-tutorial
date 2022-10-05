<template>
  <div class="text__style">
    <span class="textstyle__txt">텍스트 스타일 변경</span>
    <div id="textstyle__btn__container" class="btns">
      <button class="btn text__btn text__shadow">텍스트 그림자</button>
      <button class="btn text__btn text__invert">텍스트 색상 반전</button>
      <button class="btn text__btn text__size">제목 크기 작게</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.text__style {
  height: 70px;
  line-height: 68px;
  border-bottom: 1px solid #cacaca;
}
.textstyle__txt {
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
