<script setup>
import { ref, computed } from "vue"
import { useRouter } from "vue-router"
import { useCityStore } from "@/store/modules/city";
import { storeToRefs } from "pinia";
import CityGroup from "./city_group.vue";

const active = ref(0)
const searchValue = ref("")
const router = useRouter()

const cancelClick = () => {
  router.back()
}


const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

//读出值会失去响应性
const currentGroup = computed(() => allCities.value[active.value])
</script>

<template>
  <div class="city">
    <div class="top">
      <van-search v-model="searchValue" placeholder="城市/区域/位置" shape="round" show-action @cancel="cancelClick" />

      <van-tabs v-model:active="active" color="#ff9854">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>

    <div class="content">
      <template v-for="(value, key, index) in allCities">
        <city-group v-show="active === key" :group-data="value" />
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.city {
  .top {
    position: relative;
    z-index: 9;
  }

  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
