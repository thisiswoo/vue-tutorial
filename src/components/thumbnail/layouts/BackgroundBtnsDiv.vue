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
</style>
