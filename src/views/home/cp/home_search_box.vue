<script setup>
import useCityStore from "@/store/modules/city";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router"
import { ref } from "vue"
import { formatMonthDay, getDiffDate } from "@/utils/format_date"
const router = useRouter()

const cityClick = () => {
  router.push("/city")
}

//获取位置
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(res => {

  }, err => {

  })
}

const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

//日期范围处理 +1
const nowDate = new Date()
const startDate = ref(formatMonthDay(nowDate))
const newDate = nowDate.setDate(nowDate.getDate() + 1)
const endDate = ref(formatMonthDay(newDate))
const stayCount = ref(getDiffDate(newDate, nowDate))

const showCalen = ref(false)
const onConfirm = (value) => {
  showCalen.value = false
  startDate.value = formatMonthDay(value[0])
  endDate.value = formatMonthDay(value[1])
  stayCount.value = getDiffDate(value[1], value[0])
}
</script>

<template>
  <div class="home_search_box">
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <div class="section date-range" @click="showCalen = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
        <div class="stay">共{{ stayCount }}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDate }}</span>
        </div>
      </div>
    </div>

    <!-- <van-cell title="选择日期区间" :value="date" @click="show = true" /> -->
    <van-calendar v-model:show="showCalen" type="range" @confirm="onConfirm" color="#ff9854" :round="false" />

    <!-- 价格/人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>
  </div>
</template>

<style lang="less" scoped>
.home_search_box {
  --van-calendar-popup-height: 100%;
}

.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
    font-size: 15px;
  }

  .position {
    width: 74px;
    display: flex;
    align-items: center;

    .text {
      font-size: 12px;
      position: relative;
      top: 2px;
      color: #666;
    }

    img {
      margin-left: 5px;
      height: 18px;
      width: 18px;
    }
  }
}

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.date-range {
  height: 44px;

  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}

.price-counter {
  .start {
    border-right: 1px solid #f8f7f6;
  }
}

.hot-suggests {
  margin: 10px 0;
  height: auto;

  .item {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}

.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}
</style>
