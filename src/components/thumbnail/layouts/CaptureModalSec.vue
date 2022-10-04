<template>
  <section class="mod capture_modal hidden"></section>
  <div class="mod overlay hidden"></div>
</template>

<script>
export default {};
</script>

<style>
.capture_modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -54%);
  z-index: 100;
}
.capture_modal::after {
  position: absolute;
  text-align: center;
  content: "🎉 완성되었습니다 🎉";
  width: 600px;
  display: inline-block;
  top: -80px;
  color: #fff;
  font-size: 24px;
  left: 50%;
  transform: translateX(-50%);
}
.overlay {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
}
.hidden {
  visibility: hidden;
  opacity: 0;
}
.canvas {
  position: relative;
  border: 1px solid #fff;
}
</style>
