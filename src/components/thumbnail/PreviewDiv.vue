<template>
  <div id="capture" class="preview">
    <ul class="components" id="comp__opt1">
      <li class="render title">제목을 입력하세요</li>
      <li class="render subtitle">부제목을 입력하세요</li>
      <li class="render category">분류를 입력하세요</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
ul {
  list-style: none;
}
.preview {
  margin: 0 auto;
  height: 402px;
  width: 768px;
  background-color: #d4d4d4;
  overflow: hidden;
}
#comp__opt1 {
  width: 100%;
  height: 100%;
  color: #fff;
  text-align: center;
}
#comp__opt1 .title {
  position: relative;
  display: block;
  top: 140px;
  font-size: 54px;
  font-weight: 500;
}
#comp__opt1 .subtitle {
  position: relative;
  display: inline-block;
  top: 150px;
  font-size: 24px;
  border-top: 1px solid #ffffff;
  padding-top: 5px;
}
#comp__opt1 .category {
  position: relative;
  top: 220px;
  font-size: 24px;
}
</style>
