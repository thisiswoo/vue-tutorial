<template>
  <div class="first-div">
    <section class="wrapper">
      <article class="contents">
        <HeaderDiv />
      </article>
    </section>
  </div>
</template>

<script>
import HeaderDiv from "../components/thumbnail/HeaderDiv.vue";

export default {
  name: "App",
  components: {
    HeaderDiv,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style: none;
}
a,
a:active {
  text-decoration: none;
  color: #000;
}
.first-div {
  position: relative;
  background: #f4f4f4;
  height: 100vh;
  min-height: 1220px;
}
.first-div::after {
  position: fixed;
  content: "";
  top: 0;
  left: 0;
  display: block;
  height: 100%;
  widows: 100%;
  z-index: -100;
  backdrop-filter: blur(100px);
}
section.wrapper {
  margin: 0 auto;
  width: 1024px;
  height: 1150px;
  background-color: #fff;
  box-shadow: 0 0 20px rgb(0 0 0 / 20%);
}
article.contents {
  position: relative;
  margin: 0 auto;
  width: 768px;
}
</style>
