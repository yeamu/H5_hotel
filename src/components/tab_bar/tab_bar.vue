<script setup>
import { tabbarData } from "@/assets/data/tab_bar"
import { ref } from "vue"
const active = ref(0)


const getAssetURL = (iamge) => {
  return new URL(`../../assets/img/${iamge}`, import.meta.url).href
}

</script>

<template>
  <div class="tab_bar">
  <van-tabbar v-model="active" active-color="#ff9854">
    <template v-for="(item, index) in tabbarData">
      <van-tabbar-item icon="home-o" :to="item.path">
        <span>{{ item.text }}</span>
        <template #icon>
          <img v-if="active !== index" :src="getAssetURL(item.image)" alt="" />
            <img v-else :src="getAssetURL(item.imageActive)" alt="" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
    <!-- <template v-for="(item, index) in tabbarData" :key="item.text">
                                                                          <div class="tab_bar_item" :class="{ active: currentIndex === index }" @click="itemClick(item, index)">
                                                                            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="" />
                                                                            <img v-else :src="getAssetURL(item.imageActive)" alt="" />
                                                                            <span>{{ item.text }}</span>
                                                                          </div>
                                                                        </template> -->
  </div>
</template>

<style lang="less" scoped>
.tab_bar {

  // box-shadow: inset 0 0 1px red;
  // position: fixed;
  // bottom: 0;
  // left: 0px;
  // right: 0;
  // height: 50px;
  // display: flex;
  // border-top: 1px solid #e9e8e8;
  img {
    height: 28px;
  }
}


// .tab_bar_item {
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   &.active {
//     color: var(--primary-color);
//   }

//   img {
//     width: 36px;

//   }

//   .text {
//     font-size: 12px;
//   }


// }
</style>
 