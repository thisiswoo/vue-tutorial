<template>
  <div class="master__panel">
    <button class="btn" id="initialize">초기화</button>
    <button class="btn" id="export">완료 및 이미지화</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.master__panel {
  margin-top: 50px;
  text-align: center;
}
.master__panel .btn {
  border-radius: 0;
  margin-right: 10px;
}
.master__panel .btn:last-child {
  margin-right: 0;
  background-color: #888;
  color: #fff;
}
.master__panel .btn:last-child:hover {
  background-color: #3b45ff;
  color: #fff;
}
</style>
