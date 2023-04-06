<script setup>
import Home_nav_bar from './cp/home_nav_bar.vue';
import home_search_box from "./cp/home_search_box.vue"
</script>

<template>
  <div class="home">
    <Home_nav_bar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home_search_box />
  </div>
</template>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
</style>
