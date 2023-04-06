<script setup>
import Tab_bar from './components/tab_bar/tab_bar.vue';
import { useRoute } from "vue-router"

const route = useRoute()

</script>

<template>
  <div class="App">
    <RouterView></RouterView>
    <Tab_bar v-if="!route.meta.hideTabBar"></Tab_bar>
  </div>
</template>

<style scoped>
</style>
