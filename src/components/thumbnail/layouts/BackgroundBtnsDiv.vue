<template>
  <div class="background__btns">
    <span class="background__txt">배경을 정해주세요</span>
    <div id="background__btn__container" class="btns">
      <button class="btn random__gradient">랜덤 그라디언트</button>
      <button class="btn random__solid">랜덤 단색</button>
      <button class="btn img__url">이미지 URL</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.background__btns {
  margin-top: 20px;
  border-top: 1px solid #cacaca;
}
.background__btns {
  height: 70px;
  line-height: 68px;
  border-bottom: 1px solid #cacaca;
}
.background__txt {
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
  color: #6667ab;
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
} */
</style>
