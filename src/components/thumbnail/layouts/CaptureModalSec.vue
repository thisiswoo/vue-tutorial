<template>
  <section class="mod capture_modal hidden"></section>
  <div class="mod overlay hidden" @click="removeCapture"></div>
</template>

<script>
export default {
  name: "CaptureModalSec",
  methods: {
    removeCapture() {
      const captureModal = document.querySelector(".capture_modal");
      const mod = document.querySelectorAll(".mod");
      captureModal.removeChild(captureModal.firstElementChild);
      mod.forEach((e) => e.classList.add("hidden"));
    },
  },
};
</script>

<style>
@import "../../../assets/css/thumbnail/layouts/captureModalSec.css";
</style>
