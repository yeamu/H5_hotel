<script setup>
import useCityStore from "@/store/modules/city";
import { computed } from "vue"
import { useRouter } from "vue-router";
const props = defineProps({
  groupData: {
    type: Object,
    dafault: () => ({})
  },
})

const getList = computed(() => {
  const list = props.groupData.cities.map(it => it.group)
  list.unshift("#")
  return list
})

const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) => {
  router.back()
  cityStore.currentCity = city
} 
</script>

<template>
  <div class="city_group">
    <van-index-bar highlight-color="#ff9854" :index-list="getList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(hotCity, index) in groupData.hotCities">
          <div class="hotCity" @click="cityClick(hotCity)">{{ hotCity.cityName }}</div>
        </template>
      </div>
      <template v-for="(group, index) in groupData?.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, idx) in group.cities" :key="idx">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;

  .hotCity {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color: #fff4ec;
    margin: 6px 8px;
  }
}
</style>
