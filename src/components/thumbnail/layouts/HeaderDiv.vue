<template>
  <header>
    <h1># Thumbnail maker</h1>
    <p>썸네일 메이커</p>
    <div class="author">
      <a class="logo" href="https://thisiswoo.vercel.app/" target="_blank">
        <img src="../../../assets/img/my-logo.png" />
        <span class="user">thisiswoo</span>
      </a>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  padding-top: 64px;
  margin-bottom: 35px;
  width: 100%;
  font-family: "Roboto", sans-serif;
  position: relative;
}

header h1 {
  font-size: 54px;
  color: #343a40;
}

header p {
  font-size: 16px;
  color: #868e96;
}

header .author {
  position: relative;
  margin-top: 58px;
  height: 48px;
}

header .author img {
  height: 48px;
  border-radius: 50%;
}

header .author .user {
  position: absolute;
  top: 50%;
  left: 65px;
  transform: translateY(-50%);
  font-size: 16px;
  font-weight: 600;
}
</style>
